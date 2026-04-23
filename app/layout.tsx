import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Press Box',
  description: 'Daily Sports Cards & Live Scores',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
