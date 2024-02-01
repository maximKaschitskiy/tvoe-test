import type { Metadata } from 'next';
import './styles/fonts.scss';
import './styles/normalize.scss';
import './styles/variables.scss';
import './styles/global.scss';

export const metadata: Metadata = {
  title: 'TVOE',
  description: 'Test task',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
};
