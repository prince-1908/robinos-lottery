"use client";

import { ReactNode } from "react";
import { type State, WagmiProvider } from "wagmi";
import { config } from "@/config/wagmi-config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mantleSepoliaTestnet } from "wagmi/chains";
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mantleSepoliaTestnet],
  ssr: true,
});

type Props = {
  children: ReactNode;
  initialState: State | undefined;
};

const queryClient = new QueryClient();

export default function WagmiProviderWrapper({
  children,
  initialState,
}: Props) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      
      <QueryClientProvider client={queryClient}>
      <RainbowKitProvider theme={darkTheme({
      accentColor: '#0096FF',
      accentColorForeground: 'white',
      borderRadius: 'small',
      fontStack: 'system',
      overlayBlur: 'small',
    })}>
        {children}
      </RainbowKitProvider>
      </QueryClientProvider>
      
    </WagmiProvider>
  );
}
