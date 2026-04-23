import { useState } from 'react';

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
        {['FRONT PAGE', 'LIVE SCORES', 'MY PLAYERS', 'WAX', 'OZ'].map((label, i) => {
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
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <h2 style={{ color: '#ffd100' }}>Welcome to The Press Box</h2>
            <p style={{ fontSize: '18px', marginTop: '20px' }}>
              Your complete sports cards + live sports newspaper
            </p>
          </div>
        )}

        {tab === 'live' && (
          <div>
            <h3 style={{ color: '#ffd100', marginBottom: '20px' }}>🔴 LIVE SCORES — April 23</h3>
            <div style={{ background: '#002814', padding: '20px', borderRadius: '12px', border: '1px solid #006a3d' }}>
              <p><strong>BOS @ NYY</strong> — 6:45 PM</p>
              <p><strong>OKC vs PHX</strong> — Playoffs G2 • 9:30 PM</p>
              <p style={{ color: '#00e676', marginTop: '15px' }}>More games loading...</p>
            </div>
          </div>
        )}

        {tab === 'watch' && (
          <div>
            <h3 style={{ color: '#ffd100' }}>⭐ MY PLAYERS — Card Value Tracker</h3>
            <div style={{ background: '#002814', padding: '20px', borderRadius: '12px', marginTop: '15px' }}>
              <p><strong>Shohei Ohtani</strong> — $2
