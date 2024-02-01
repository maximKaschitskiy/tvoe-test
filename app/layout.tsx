import type { Metadata } from 'next';
import Head from 'next/head';
import './styles/normalize.scss';
import './styles/fonts.scss';
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
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@300;400;500;600;700;900&display=swap"
        />
      </Head>
      <body>{children}</body>
    </html>
  )
};
