"use client";

import AppLayout from "@/layouts/AppLayout";
import GlobalStyle from "@/styles/global.style";
import { RecoilRoot } from "recoil";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <RecoilRoot>
        <GlobalStyle />
        <body>
          <AppLayout>{children}</AppLayout>
        </body>
      </RecoilRoot>
    </html>
  );
}
