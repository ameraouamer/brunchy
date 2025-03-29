import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Brunchy DZ - Luxury Brunch & Pastry',
  description: 'Discover the Art of Brunch at Brunchy DZ - A luxury brunch and pastry experience in Algeria.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}