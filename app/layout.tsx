import type { Metadata } from 'next';
import './styles/fonts.scss';
import './styles/normalize.scss';
import './styles/variables.scss';
import './styles/global.scss';
import { Inter, Archivo } from 'next/font/google'


export const metadata: Metadata = {
  title: 'TVOE',
  description: 'Test task',
};

export const inter = Inter({
  subsets: ['latin'],
})

export const archivo = Archivo({
  weight: ['900'],
  style: ['italic'],
  subsets: ['latin'],
  display: 'swap',
})

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
