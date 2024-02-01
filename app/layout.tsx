import type { Metadata } from 'next';
import './styles/fonts.scss';
import './styles/normalize.scss';
import './styles/variables.scss';
import './styles/global.scss';
import { inter } from './fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={inter.className}>
      <body>{children}</body>
    </html>
  )
};
