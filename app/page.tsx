'use client';

import { useState } from 'react';
import { G, ALL_PLAYERS } from '@/lib/data';

export default function Home() {
  const [tab, setTab] = useState('front');

  return (
    <div style={{ background: G.bg, color: G.text, minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: G.gold, textAlign: 'center' }}>The Press Box</h1>
      <p>Build successful! Now add your components.</p>
      
      <div style={{ marginTop: 30 }}>
        <button onClick={() => setTab('front')} style={{ background: tab === 'front' ? G.gold : G.green, color: G.bg, marginRight: 10 }}>
          Front Page
        </button>
        <button onClick={() => setTab('watch')} style={{ background: tab === 'watch' ? G.gold : G.green, color: G.bg }}>
          My Players
        </button>
      </div>

      {tab === 'front' && <p>Live Scores + Headlines coming soon...</p>}
      {tab === 'watch' && <p>My Players Panel (add your component here)</p>}
    </div>
  );
}
