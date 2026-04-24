export async function GET() {
  try {
    const res = await fetch(
      `https://www.thesportsdb.com/api/v1/json/${process.env.SPORTS_API_KEY}/livescore.php?s=Baseball`
    );

    const data = await res.json();

    const games = (data?.events || []).map(g => ({
      home: g.strHomeTeam,
      away: g.strAwayTeam,
      hs: parseInt(g.intHomeScore || 0),
      as: parseInt(g.intAwayScore || 0),
      status: g.strStatus === "Live" ? "live" : "final",
      note: g.strProgress || ""
    }));

    return Response.json(games);
  } catch (err) {
    return Response.json({ error: "failed" }, { status: 500 });
  }
}
