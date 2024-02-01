import { Inter, Archivo } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
});

export const archivo = Archivo({
  weight: ['900'],
  style: ['italic'],
  subsets: ['latin'],
  display: 'swap',
});