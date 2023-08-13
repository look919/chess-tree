import { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import 'rc-tree/assets/index.css';
import './globals.css';

const font = Poppins({ subsets: ['latin-ext'], weight: ['100', '400', '700'] });

export const metadata = {
  title: 'Create Next App',
  description: 'TODO: Add description',
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
