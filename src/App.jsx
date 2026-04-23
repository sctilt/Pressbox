import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { week: 'W1', Ohtani: 1950, Judge: 875, Edgecombe: 65, Trout: 380 },
  { week: 'W2', Ohtani: 1980, Judge: 900, Edgecombe: 90, Trout: 500 },
  { week: 'W3', Ohtani: 2020, Judge: 920, Edgecombe: 120, Trout: 550 },
  { week: 'W4', Ohtani: 2050, Judge: 940, Edgecombe: 150, Trout: 600 },
  { week: 'Now', Ohtani: 2100, Judge: 965, Edgecombe: 175, Trout: 620 },
];

const players = [
  { name: "Shohei Ohtani", team: "LAD", value: 2100, change: 7.7 },
  { name: "Aaron Judge", team: "NYY", value: 965, change: 10.3 },
  { name: "VJ Edgecombe", team: "PHI", value: 175, change: 169 },
  { name: "Mike Trout", team: "LAA", value: 620, change: 63 },
  { name: "Yordan Alvarez", team: "HOU", value: 325, change: 23.6 },
];

export default function App() {
  const [tab, setTab] = useState('front');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#001a0d', color: '#e8f5ee', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#006a3d', padding: '25px', textAlign: 'center', borderBottom: '6px solid #ffd100' }}>
        <div style={{ color: '#ffd100', fontSize: '11px', letterSpacing: '6px' }}>⬥ DAILY SPORTS EDITION ⬥</div>
        <h1 style={{ fontSize: '42px', margin: '8px 0 4px', color: '#ffffff' }}>THE PRESS BOX</h1>
        <div style={{ color: '#ffd100', fontSize: '15px' }}>April 23, 2026 • Fenway Edition</div>
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', overflowX: 'auto', backgroundColor: '#002814', padding: '10px 0', borderBottom: '2px solid #006a3d' }}>
        {['FRONT', 'LIVE', 'PLAYERS', 'WAX', 'OZ'].map(label => (
          <button
            key={label}
            onClick={() => setTab(label.toLowerCase())}
            style={{
              padding: '14px 20px',
              background: tab === label.toLowerCase() ? '#ffd100' : 'transparent',
              color: tab === label.toLowerCase() ? '#001a0d' : '#7ab893',
              border: 'none',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              flex: '1',
              minWidth: '80px'
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
        {/* FRONT PAGE */}
        {tab === 'front' && (
          <div>
            <h2 style={{ color: '#ffd100', textAlign: 'center' }}>🔥 Today's Top Stories</h2>
            <div style={{ background: '#002814', padding: '20px', borderRadius: '12px', margin: '20px 0' }}>
              <p><strong>VJ Edgecombe</strong> drops 30 pts in Playoffs G2 — Series tied</p>
              <p><strong>Mike Trout</strong> heating up — 5 HRs in 4 games</p>
              <p><strong>2026 NFL Draft</strong> begins tomorrow in Pittsburgh</p>
            </div>
          </div>
        )}

        {/* LIVE SCORES */}
        {tab === 'live' && (
          <div style={{ background: '#002814', padding: '25px', borderRadius: '12px' }}>
            <h3 style={{ color: '#ffd100' }}>🔴 LIVE & TODAY'S GAMES</h3>
            <p>BOS @ NYY — 6:45 PM ET</p>
            <p>OKC vs PHX — NBA Playoffs G2 • 9:30 PM ET</p>
            <p style={{ color: '#00e676', marginTop: '15px' }}>More games updating live...</p>
          </div>
        )}

        {/* PLAYERS */}
        {tab === 'players' && (
          <div>
            <h3 style={{ color: '#ffd100', marginBottom: '15px' }}>📈 CARD VALUE TREND</h3>
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={chartData}>
                <CartesianGrid stroke="#1a4030" />
                <XAxis dataKey="week" stroke="#7ab893" />
                <YAxis stroke="#7ab893" />
                <Tooltip />
                <Line type="monotone" dataKey="Ohtani" stroke="#ffd100" strokeWidth={4} name="Ohtani" />
                <Line type="monotone" dataKey="Judge" stroke="#00e676" strokeWidth={4} name="Judge" />
                <Line type="monotone" dataKey="Edgecombe" stroke="#ffffff" strokeWidth={4} name="Edgecombe" />
              </LineChart>
            </ResponsiveContainer>

            <h3 style={{ color: '#ffd100', margin: '25px 0 15px' }}>⭐ Tracked Players</h3>
            {players.map(p => (
              <div key={p.name} style={{ background: '#002814', padding: '18px', marginBottom: '12px', borderRadius: '10px', border: '1px solid #006a3d' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <strong>{p.name}</strong><br />
                    <span style={{ color: '#7ab893' }}>{p.team}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '22px', color: '#ffd100' }}>${p.value}</div>
                    <div style={{ color: p.change > 0 ? '#00e676' : '#ff4444' }}>
                      {p.change > 0 ? '▲' : '▼'} {p.change}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* WAX */}
        {tab === 'wax' && (
          <div style={{ background: '#002814', padding: '25px', borderRadius: '12px' }}>
            <h3 style={{ color: '#ffd100' }}>📦 WAX TRACKER</h3>
            <p><strong>2026 Bowman Draft</strong> — May 13 (Pre-order live)</p>
            <p><strong>2026 Topps Chrome</strong> — August</p>
            <p><strong>2025-26 Prizm Basketball</strong> — Already heating up</p>
          </div>
        )}

        {/* OZ */}
        {tab === 'oz' && (
          <div style={{ background: '#002814', padding: '25px', borderRadius: '12px' }}>
            <h3 style={{ color: '#ffd100' }}>🔮 OZ DAILY PICKS</h3>
            <p><strong>Strong Buy:</strong> Ethan Holliday 2026 Bowman 1st Auto</p>
            <p><strong>Today's Best Bet:</strong> Angels ML vs TOR (+185)</p>
            <p><strong>High Confidence:</strong> Jose Soriano Over 6.5 Ks</p>
          </div>
        )}
      </div>
    </div>
  );
}
