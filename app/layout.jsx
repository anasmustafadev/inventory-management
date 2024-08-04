import { Inter } from 'next/font/google';
import '@styles/globals.css';
import PageThemeProvider from '@providers/PageThemeProvider';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import NavBar from '@components/NavBar';
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TrackIt - An Inventory Management Web Application',
  description:
    'An AI Powered Inventory Management Web App for all your Business Needs',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <PageThemeProvider>
          <NavBar />
          {children}
        </PageThemeProvider>
      </body>
    </html>
  );
}
