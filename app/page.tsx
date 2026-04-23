// app/page.tsx
'use client';

import { useState } from 'react';

const G = {
  bg: "#001a0d", bg2: "#002814", bg3: "#003318",
  border: "#004d24", border2: "#006a3d",
  green: "#006a3d", gold: "#ffd100", white: "#ffffff",
  text: "#e8f5ee", muted: "#7ab893", dim: "#1a4030",
  up: "#00e676", down: "#ff4444",
};

const ALL_PLAYERS = [
  { name: "Shohei Ohtani", team: "LA Dodgers", rankCurrent: 1, cardCurrent: 2100, cardPctChange: 7.7 },
  { name: "Aaron Judge", team: "NY Yankees", rankCurrent: 2, cardCurrent: 965, cardPctChange: 10.3 },
  { name: "Mike Trout", team: "LA Angels", rankCurrent: 9, cardCurrent: 620, cardPctChange: 63.2 },
];

export default function ThePressBox() {
  const [tab, setTab] = useState<'front' | 'watch' | 'wax'>('front');

  return (
    <div style={{ minHeight: '100vh', background: G.bg, color: G.text, fontFamily: 'Arial, sans-serif' }}>
      {/* Masthead */}
      <div style={{ background: G.green, padding: '20px 10px', textAlign: 'center', borderBottom: `4px solid ${G.gold}` }}>
        <div style={{ color: G.gold, fontSize: '12px', letterSpacing: '6px' }}>DAILY SPORTS EDITION</div>
        <h1 style={{ fontSize: '38px', fontWeight: '900', margin: '8px 0', color: 'white', letterSpacing: '2px' }}>
          THE PRESS BOX
        </h1>
        <div style={{ color: G.gold, fontSize: '15px' }}>April 23, 2026</div>
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', background: G.bg2, overflowX: 'auto', borderBottom: `2px solid ${G.green}` }}>
        {['front', 'watch', 'wax'].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t as any)}
            style={{
              flex: 1,
              padding: '16px',
              background: tab === t ? G.gold : 'transparent',
              color: tab === t ? G.bg : G.muted,
              border: 'none',
              fontWeight: '700',
              fontSize: '13px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            {t === 'front' ? 'FRONT PAGE' : t === 'watch' ? 'MY PLAYERS' : 'WAX 📦'}
          </button>
        ))}
      </div>

      <div style={{ padding: '20px', maxWidth: '720px', margin: '0 auto' }}>
        {tab === 'front' && (
          <div style={{ background: G.bg2, padding: '20px', borderRadius: '8px' }}>
            <h2 style={{ color: G.gold }}>✅ Build Successful!</h2>
            <p>Welcome to The Press Box — your daily sports cards newspaper.</p>
            <p>Live scores and full features coming in the next update.</p>
          </div>
        )}

        {tab === 'watch' && (
          <div>
            <h2 style={{ color: G.gold, marginBottom: '20px' }}>My Players — Card Watchlist</h2>
            {ALL_PLAYERS.map((p, i) => (
              <div key={i} style={{ background: G.bg2, padding: '16px', marginBottom: '12px', borderRadius: '8px', border: `1px solid ${G.border}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong style={{ fontSize: '18px' }}>{p.name}</strong>
                    <div style={{ color: G.muted }}>{p.team}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: G.gold, fontSize: '20px', fontWeight: '700' }}>${p.cardCurrent}</div>
                    <div style={{ color: G.up }}>+{p.cardPctChange}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'wax' && (
          <div style={{ background: G.bg2, padding: '30px', borderRadius: '8px', textAlign: 'center' }}>
            <h2 style={{ color: G.gold }}>Wax Tracker</h2>
            <p>2026 Bowman, Chrome, and Prizm releases coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
}
