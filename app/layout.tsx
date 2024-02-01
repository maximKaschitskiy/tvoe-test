import './styles/fonts.scss';
import './styles/normalize.scss';
import './styles/variables.scss';
import './styles/global.scss';
import { inter, archivo } from './fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="ru" style={{
      // @ts-ignore
      '--font-inter': inter.style.fontFamily,
      '--font-archivo': archivo.style.fontFamily
    }}>
      <body>{children}</body>
    </html>
  )
};
