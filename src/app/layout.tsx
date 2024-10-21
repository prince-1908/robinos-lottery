import type { Metadata } from "next";
import "./globals.css";
import WagmiProviderWrapper from "@/providers/WagmiProvider";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config/wagmi-config";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  {
    return (
      <html lang="en">
        <body className={`antialiased`}>
          <WagmiProviderWrapper initialState={initialState}>
            {children}
          </WagmiProviderWrapper>
        </body>
      </html>
    );
  }
}
