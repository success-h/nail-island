import type { Metadata } from 'next';
import { Geist, Shadows_Into_Light_Two } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Shadows_Into_Light_Two({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Ela Beauty Nails - Rotterdam',
  description: 'Magic at finger tips',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: 'en-US' | 'nl' }>;
}>) {
  return (
    <html lang="en">
      <LanguageProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </LanguageProvider>
    </html>
  );
}
