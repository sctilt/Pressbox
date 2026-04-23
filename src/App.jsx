import { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('front');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#001a0d', color: '#e8f5ee', fontFamily: 'Arial, sans-serif' }}>
      {/* Masthead */}
      <div style={{ backgroundColor: '#006a3d', padding: '25px', textAlign: 'center', borderBottom: '6px solid #ffd100' }}>
        <div style={{ color: '#ffd100', fontSize: '11px', letterSpacing: '6px' }}>⬥ DAILY SPORTS EDITION ⬥</div>
        <h1 style={{ fontSize: '42px', margin: '8px 0 4px', color: '#ffffff' }}>THE PRESS BOX</h1>
        <div style={{ color: '#ffd100', fontSize: '15px' }}>April 23, 2026 • Fenway Edition</div>
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', overflowX: 'auto', backgroundColor: '#002814', padding: '8px 0', borderBottom: '2px solid #006a3d' }}>
        {['FRONT PAGE', 'MLB', 'NBA', 'NFL', 'MY PLAYERS', 'WAX', 'OZ'].map((label, i) => {
          const id = ['front','mlb','nba','nfl','watch','wax','oz'][i];
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
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <h2 style={{ color: '#ffd100', fontSize: '28px' }}>Welcome to The Press Box</h2>
            <p style={{ fontSize: '18px', marginTop: '20px' }}>
              Live Scores • Card Values • Draft News • Wax Tracker • OZ Predictions
            </p>
            <div style={{ marginTop: '40px', background: '#002814', padding: '30px', borderRadius: '12px' }}>
              <p>🎉 Full app structure loaded successfully</p>
            </div>
          </div>
        )}

        {tab === 'watch' && (
          <div>
            <h3 style={{ color: '#ffd100' }}>⭐ MY PLAYERS TRACKER</h3>
            <p>Your watched players and card values will go here (full data coming next).</p>
          </div>
        )}

        {tab === 'wax' && (
          <div>
            <h3 style={{ color: '#ffd100' }}>📦 WAX TRACKER</h3>
            <p>Upcoming Bowman, Topps Chrome, Prizm releases with MSRP vs Resell data.</p>
          </div>
        )}

        {tab === 'oz' && (
          <div>
            <h3 style={{ color: '#ffd100' }}>🔮 OZ — SPORTS ORACLE</h3>
            <p>Daily investment picks + gambling plays.</p>
          </div>
        )}

        {['mlb','nba','nfl'].includes(tab) && (
          <div style={{ textAlign: 'center', padding: '80px 20px' }}>
            <h3>{tab.toUpperCase()} Hub</h3>
            <p>Live scores, standings, and draft coverage coming next step.</p>
          </div>
        )}
      </div>
    </div>
  );
}
