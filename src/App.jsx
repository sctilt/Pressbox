import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { week: 'W1', Ohtani: 1950, Judge: 875, Edgecombe: 65 },
  { week: 'W2', Ohtani: 1980, Judge: 900, Edgecombe: 90 },
  { week: 'W3', Ohtani: 2020, Judge: 920, Edgecombe: 120 },
  { week: 'W4', Ohtani: 2050, Judge: 940, Edgecombe: 150 },
  { week: 'Now', Ohtani: 2100, Judge: 965, Edgecombe: 175 },
];

export default function App() {
  const [tab, setTab] = useState('front');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#001a0d', color: '#e8f5ee', fontFamily: 'Arial, sans-serif' }}>
      {/* Masthead */}
      <div style={{ backgroundColor: '#006a3d', padding: '25px', textAlign: 'center', borderBottom: '6px solid #ffd100' }}>
        <div style={{ color: '#ffd100', fontSize: '11px', letterSpacing: '6px' }}>⬥ DAILY SPORTS EDITION ⬥</div>
        <h1 style={{ fontSize: '42px', margin: '8px 0 4px', color: '#ffffff' }}>THE PRESS BOX</h1>
        <div style={{ color: '#ffd100', fontSize: '15px' }}>April 23, 2026</div>
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', overflowX: 'auto', backgroundColor: '#002814', padding: '8px 0', borderBottom: '2px solid #006a3d' }}>
        {['FRONT PAGE', 'LIVE', 'PLAYERS', 'WAX', 'OZ'].map((label, i) => {
          const id = ['front','live','watch','wax','oz'][i];
          return (
            <button
              key={i}
              onClick={() => setTab(id)}
              style={{
                padding: '14px 18px',
                background: tab === id ? '#ffd100' : 'transparent',
                color: tab === id ? '#001a0d' : '#7ab893',
                border: 'none',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                fontSize: '14px'
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
        {tab === 'front' && (
          <div style={{ textAlign: 'center', padding: '30px 0' }}>
            <h2 style={{ color: '#ffd100' }}>Good Morning, Boston</h2>
            <p style={{ fontSize: '18px' }}>Your daily sports cards newspaper is live.</p>
          </div>
        )}

        {tab === 'live' && (
          <div>
            <h3 style={{ color: '#ffd100' }}>🔴 LIVE SCORES</h3>
            <div style={{ background: '#002814', padding: '20px', borderRadius: '12px', marginBottom: '20px' }}>
              <p>BOS @ NYY — 6:45 PM ET</p>
              <p>OKC vs PHX (Playoffs G2) — 9:30 PM ET</p>
            </div>
          </div>
        )}

        {tab === 'watch' && (
          <div>
            <h3 style={{ color: '#ffd100', marginBottom: '15px' }}>📈 CARD VALUE TRACKER</h3>
            
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={chartData}>
                <CartesianGrid stroke="#1a4030" />
                <XAxis dataKey="week" stroke="#7ab893" />
                <YAxis stroke="#7ab893" />
                <Tooltip />
                <Line type="monotone" dataKey="Ohtani" stroke="#ffd100" strokeWidth={3} name="Ohtani" />
                <Line type="monotone" dataKey="Judge" stroke="#00e676" strokeWidth={3} name="Judge" />
                <Line type="monotone" dataKey="Edgecombe" stroke="#ffffff" strokeWidth={3} name="Edgecombe" />
              </LineChart>
            </ResponsiveContainer>

            <div style={{ marginTop: '20px', background: '#002814', padding: '15px', borderRadius: '8px' }}>
              <p><strong>Shohei Ohtani</strong> — $2,100 (+7.7%)</p>
              <p><strong>Aaron Judge</strong> — $965 (+10.3%)</p>
              <p><strong>VJ Edgecombe</strong> — $175 (+169% 🔥)</p>
            </div>
          </div>
        )}

        {tab === 'wax' && <div style={{ padding: '40px', textAlign: 'center' }}><h3>WAX TRACKER</h3><p>2026 Bowman • Chrome releases coming soon</p></div>}
        {tab === 'oz' && <div style={{ padding: '40px', textAlign: 'center' }}><h3>🔮 OZ PREDICTIONS</h3><p>Daily picks &amp; betting plays loading...</p></div>}
      </div>
    </div>
  );
}
