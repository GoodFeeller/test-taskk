import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Roboto } from 'next/font/google';
import { theme } from '../theme';
import './global.css';
import StoreProvider from '@/providers/StoreProvider';

export const metadata = {
  title: 'Stoke Check',
  description: 'I am using Mantine with Next.js!',
};
const inter = Roboto({ subsets: ['cyrillic'], weight: '500', variable: '--roboto' });

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <StoreProvider>
        <head>
          <ColorSchemeScript />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
        </head>
        <body className={inter.variable}>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </body>
      </StoreProvider>
    </html>
  );
}
