import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { week: 'W1', Ohtani: 1950, Edgecombe: 65, Trout: 380 },
  { week: 'W2', Ohtani: 1980, Edgecombe: 90, Trout: 500 },
  { week: 'W3', Ohtani: 2020, Edgecombe: 120, Trout: 550 },
  { week: 'W4', Ohtani: 2050, Edgecombe: 150, Trout: 600 },
  { week: 'Now', Ohtani: 2100, Edgecombe: 175, Trout: 620 },
];

const players = [
  { initials: "DR", name: "Dalton Rushing", team: "LA Dodgers", pos: "C/1B", value: 88, change: 193.3, rank: 35, sport: "MLB" },
  { initials: "JG", name: "Josuar Gonzalez", team: "SF Giants", pos: "SS - Prospect", value: 28, change: 180, rank: 28, sport: "MLB" },
  { initials: "VE", name: "VJ Edgecombe", team: "Philadelphia 76ers", pos: "SG", value: 175, change: 169.2, rank: 18, sport: "NBA" },
  { initials: "PT", name: "Payton Tolle", team: "Boston Red Sox", pos: "LHP - Prospect", value: 35, change: 150, rank: 19, sport: "MLB" },
  { initials: "SH", name: "Scoot Henderson", team: "Portland Trail Blazers", pos: "PG", value: 62, change: 121.4, rank: 22, sport: "NBA" },
  { initials: "BR", name: "Ben Rice", team: "New York Yankees", pos: "1B/C/DH", value: 48, change: 118.2, rank: 28, sport: "MLB" },
];

export default function App() {
  const [tab, setTab] = useState('front');
  const [sortBy] = useState('gainers');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#001a0d', color: '#e8f5ee', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#006a3d', padding: '20px', textAlign: 'center', borderBottom: '6px solid #ffd100' }}>
        <div style={{ color: '#ffd100', fontSize: '12px', letterSpacing: '4px' }}>DAILY SPORTS EDITION</div>
        <h1 style={{ fontSize: '36px', margin: '8px 0', color: '#ffffff' }}>THE PRESS BOX</h1>
        <div style={{ color: '#ffd100', fontSize: '15px' }}>THURSDAY, APRIL 23, 2026</div>
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', backgroundColor: '#002814', overflowX: 'auto', borderBottom: '3px solid #ffd100' }}>
        {['FRONT PAGE', 'MLB', 'NBA PLAYOFFS', 'NFL', 'MY PLAYERS', 'WAX', 'OZ'].map((t, i) => (
          <button
            key={i}
            onClick={() => setTab(t)}
            style={{
              padding: '16px 14px',
              background: tab === t ? '#ffd100' : 'transparent',
              color: tab === t ? '#001a0d' : '#7ab893',
              border: 'none',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              fontSize: '14px'
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <div style={{ padding: '15px', maxWidth: '900px', margin: '0 auto' }}>
        {tab === 'FRONT PAGE' && (
          <div>
            <h2 style={{ color: '#ffd100', marginBottom: '15px' }}>BREAKING NEWS — MY PLAYERS & PROSPECTS</h2>
            <div style={{ background: '#002814', padding: '18px', borderRadius: '8px', borderLeft: '5px solid #ffd100', marginBottom: '15px' }}>
              <strong>EDGECOMBE ERUPTS: 30-PT PLAYOFF EXPLOSION</strong><br />
              Stuns Celtics, ties series 1-1
            </div>
            <div style={{ background: '#002814', padding: '18px', borderRadius: '8px', marginBottom: '15px' }}>
              Soriano makes history: 0.28 ERA over 5 starts
            </div>
          </div>
        )}

        {tab === 'MY PLAYERS' && (
          <div>
            <div style={{ background: '#ffd100', color: '#001a0d', padding: '14px', textAlign: 'center', fontWeight: 'bold', borderRadius: '8px', marginBottom: '15px' }}>
              + ADD PLAYER
            </div>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '15px', overflowX: 'auto' }}>
              <div style={{ background: '#006a3d', padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>ALL (34)</div>
              <div style={{ padding: '8px 16px', color: '#7ab893', whiteSpace: 'nowrap' }}>IN SEASON (29)</div>
              <div style={{ padding: '8px 16px', color: '#7ab893', whiteSpace: 'nowrap' }}>OFF SEASON (5)</div>
            </div>

            <div style={{ marginBottom: '10px', color: '#7ab893', fontSize: '14px' }}>
              SORT BY <span style={{ color: '#ffd100' }}>🏆 Biggest Card Gainers</span>
            </div>

            {players.map((p, i) => (
              <div key={i} style={{ background: '#002814', marginBottom: '12px', borderRadius: '10px', padding: '16px', border: '1px solid #006a3d' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '42px', height: '42px', background: '#006a3d', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#ffd100' }}>
                    {p.initials}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold', fontSize: '17px' }}>{p.name}</div>
                    <div style={{ color: '#7ab893', fontSize: '14px' }}>{p.team} • {p.pos}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '20px', color: '#ffd100' }}>${p.value}</div>
                    <div style={{ color: '#00e676', fontWeight: 'bold' }}>▲{p.change}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'WAX' && <div style={{ padding: '40px', textAlign: 'center', color: '#ffd100' }}>📦 Wax Products Tracker (Bowman, Chrome, Prizm)</div>}
        {tab === 'OZ' && <div style={{ padding: '40px', textAlign: 'center', color: '#ffd100' }}>🔮 OZ Daily Picks &amp; Betting Advice</div>}
      </div>
    </div>
  );
}
