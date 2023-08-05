"use client";

import AppLayout from "@/layouts/AppLayout";
import GlobalStyle from "@/styles/global.style";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
