import React from 'react';
import './global.css';
import LayoutHead from './layouts/Head';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutHead />
        <div className="lg:container lg:max-w-screen-xl px-4 mx-auto">{children}</div>
      </body>
    </html>
  );
}
