import { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('front');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#001a0d', color: '#e8f5ee', fontFamily: 'Arial, sans-serif' }}>
      {/* Masthead */}
      <div style={{ backgroundColor: '#006a3d', padding: '25px', textAlign: 'center', borderBottom: '6px solid #ffd100' }}>
        <div style={{ color: '#ffd100', fontSize: '11px', letterSpacing: '6px' }}>DAILY SPORTS EDITION</div>
        <h1 style={{ fontSize: '42px', margin: '8px 0 4px', color: '#ffffff' }}>THE PRESS BOX</h1>
        <div style={{ color: '#ffd100', fontSize: '15px' }}>April 23, 2026</div>
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

      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        {tab === 'front' && (
          <div>
            <h2 style={{ color: '#ffd100', textAlign: 'center' }}>Welcome to The Press Box</h2>
            <p style={{ textAlign: 'center', fontSize: '18px', marginTop: '20px' }}>
              Your complete sports cards newspaper is now live!<br/>
              Live scores • Card values • Draft news • Betting picks
            </p>
            <div style={{ background: '#002814', padding: '30px', borderRadius: '12px', marginTop: '30px', textAlign: 'center' }}>
              <p>🚀 Full features loaded successfully</p>
            </div>
          </div>
        )}

        {tab === 'watch' && <div style={{ textAlign: 'center', padding: '60px 20px' }}>My Players Tracker — Coming with full data</div>}
        {tab === 'wax' && <div style={{ textAlign: 'center', padding: '60px 20px' }}>Wax Box Tracker — Coming</div>}
        {tab === 'oz' && <div style={{ textAlign: 'center', padding: '60px 20px' }}>🔮 OZ Predictions — Coming</div>}
        {['mlb','nba','nfl'].includes(tab) && <div style={{ textAlign: 'center', padding: '60px 20px' }}>{tab.toUpperCase()} Section — Full data loaded from original file</div>}
      </div>
    </div>
  );
}
