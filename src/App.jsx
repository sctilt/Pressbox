import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { week: 'W1', Ohtani: 1950, Judge: 875, Edgecombe: 65, Trout: 380 },
  { week: 'W2', Ohtani: 1980, Judge: 900, Edgecombe: 90, Trout: 500 },
  { week: 'W3', Ohtani: 2020, Judge: 920, Edgecombe: 120, Trout: 550 },
  { week: 'W4', Ohtani: 2050, Judge: 940, Edgecombe: 150, Trout: 600 },
  { week: 'Now', Ohtani: 2100, Judge: 965, Edgecombe: 175, Trout: 620 },
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
              whiteSpace: 'nowrap'
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
        {tab === 'front' && (
          <div>
            <h2 style={{ color: '#ffd100', textAlign: 'center' }}>Breaking News</h2>
            <p>VJ Edgecombe drops 30 in Playoffs • Trout heating up • 2026 Draft buzz</p>
          </div>
        )}

        {tab === 'live' && (
          <div style={{ background: '#002814', padding: '25px', borderRadius: '12px' }}>
            <h3 style={{ color: '#ffd100' }}>🔴 LIVE SCORES</h3>
            <p>BOS @ NYY — 6:45 PM</p>
            <p>OKC vs PHX (Playoffs G2) — 9:30 PM</p>
          </div>
        )}

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
                <Line type="monotone" dataKey="Trout" stroke="#ff9800" strokeWidth={4} name="Trout" />
              </LineChart>
            </ResponsiveContainer>
            <div style={{ marginTop: '20px' }}>
              <p><strong>Shohei Ohtani</strong> — $2,100 (+7.7%)</p>
              <p><strong>VJ Edgecombe</strong> — $175 (+169% 🔥)</p>
            </div>
          </div>
        )}

        {tab === 'wax' && (
          <div>
            <h3 style={{ color: '#ffd100' }}>📦 WAX TRACKER</h3>
            <p>2026 Bowman Draft • Topps Chrome • Prizm Basketball</p>
          </div>
        )}

        {tab === 'oz' && (
          <div>
            <h3 style={{ color: '#ffd100' }}>🔮 OZ PREDICTIONS</h3>
            <p>Strong Buy: Ethan Holliday Bowman Auto</p>
            <p>Today's Best Bet: Angels ML</p>
          </div>
        )}
      </div>
    </div>
  );
}
