// lib/claude.ts
export async function callClaudeAPI(prompt: string, useWebSearch = true) {
  const body: any = {
    model: "claude-sonnet-4-20250514",
    max_tokens: 2500,
    messages: [{ role: "user", content: prompt }],
  };

  if (useWebSearch) {
    body.tools = [{ type: "web_search_20250305", name: "web_search" }];
  }

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "anthropic-dangerous-direct-browser-access": "true",
      "x-api-key": process.env.ANTHROPIC_API_KEY!, // ← Add this
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error(`API ${res.status}`);
  const data = await res.json();
  return (data.content || [])
    .filter((c: any) => c.type === "text")
    .map((c: any) => c.text)
    .join("");
}

export function extractJSON(text: string, type = "object") {
  const clean = text.replace(/```json|```/g, "").trim();
  const pattern = type === "array" ? /\[[\s\S]*\]/ : /\{[\s\S]*\}/;
  const match = clean.match(pattern);
  if (!match) throw new Error("No JSON found");
  return JSON.parse(match[0]);
}
