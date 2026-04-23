'use client';

import { useState } from 'react';

const G = {
  bg: "#001a0d", bg2: "#002814", bg3: "#003318",
  border: "#004d24", border2: "#006a3d",
  green: "#006a3d", gold: "#ffd100",
  text: "#e8f5ee", muted: "#7ab893",
  up: "#00e676", down: "#ff4444",
};

const ALL_PLAYERS = [
  { name: "Shohei Ohtani", team: "LA Dodgers", rankCurrent: 1, cardCurrent: 2100, cardPctChange: 7.7 },
  { name: "Aaron Judge", team: "NY Yankees", rankCurrent: 2, cardCurrent: 965, cardPctChange: 10.3 },
  { name: "Mike Trout", team: "LA Angels", rankCurrent: 9, cardCurrent: 620, cardPctChange: 63.2 },
  { name: "VJ Edgecombe", team: "Philadelphia 76ers", rankCurrent: 18, cardCurrent: 175, cardPctChange: 169.2 },
];

export default function ThePressBox() {
  const [tab, setTab] = useState<'front' | 'watch' | 'wax'>('front');

  return (
    <div style={{ minHeight: '100vh', background: G.bg, color: G.text, fontFamily: 'Arial, sans-serif' }}>
      {/* Masthead */}
      <div style={{ background: G.green, padding: '20px 10px', textAlign: 'center', borderBottom: `4px solid ${G.gold}` }}>
        <div style={{ color: G.gold, fontSize: '12px', letterSpacing: '6px' }}>⬥ DAILY SPORTS EDITION ⬥</div>
        <h1 style={{ fontSize: '42px', fontWeight: '900', margin: '8px 0', color: 'white', letterSpacing: '3px' }}>
          THE PRESS BOX
        </h1>
        <div style={{ color: G.gold, fontSize: '16px' }}>April 23, 2026</div>
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', background: G.bg2, overflowX: 'auto', borderBottom: `2px solid ${G.green}` }}>
        {[
          { id: 'front', label: 'FRONT PAGE' },
          { id: 'watch', label: 'MY PLAYERS' },
          { id: 'wax', label: 'WAX 📦' }
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id as any)}
            style={{
              flex: 1,
              padding: '16px 12px',
              background: tab === t.id ? G.gold : 'transparent',
              color: tab === t.id ? '#001a0d' : G.muted,
              border: 'none',
              fontWeight: '700',
              fontSize: '13px',
              cursor: 'pointer',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ padding: '20px', maxWidth: '720px', margin: '0 auto' }}>
        {tab === 'front' && (
          <div style={{ background: G.bg2, padding: '25px', borderRadius: '10px', border: `1px solid ${G.green}` }}>
            <h2 style={{ color: G.gold, marginTop: 0 }}>✅ Build Successful!</h2>
            <p>Welcome to <strong>The Press Box</strong>.</p>
          </div>
        )}

        {tab === 'watch' && (
          <div>
            <h2 style={{ color: G.gold }}>My Players — Card Watchlist</h2>
            {ALL_PLAYERS.map((p, i) => (
              <div key={i} style={{ 
                background: G.bg2, 
                padding: '18px', 
                marginBottom: '12px', 
                borderRadius: '8px',
                border: `1px solid ${G.border}`
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '18px', fontWeight: '700' }}>{p.name}</div>
                    <div style={{ color: G.muted }}>{p.team}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: G.gold, fontSize: '22px', fontWeight: '700' }}>${p.cardCurrent}</div>
                    <div style={{ color: G.up, fontWeight: '700' }}>+{p.cardPctChange}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'wax' && (
          <div style={{ background: G.bg2, padding: '30px', borderRadius: '10px', textAlign: 'center' }}>
            <h2 style={{ color: G.gold }}>Wax Tracker</h2>
            <p>Coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
}
