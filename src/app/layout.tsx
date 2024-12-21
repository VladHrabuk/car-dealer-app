import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';

export const metadata: Metadata = {
  title: 'Car Dealer',
  description: 'Explore a wide range of vehicles.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
