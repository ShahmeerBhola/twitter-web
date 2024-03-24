import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import theme from "./theme.json";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useMemo, useState } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

// Use require instead of import since the stylesheets are not included in the main bundle

function App() {
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      // new SolflareWalletAdapter(),
      // new GlowWalletAdapter(),
      // new MathWalletAdapter(),
    ],
    []
  );

  // Set the network to devnet, testnet, or mainnet-beta
  const endpoint = useMemo(() => clusterApiUrl("mainnet-beta"), []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ConfigProvider theme={theme}>
        <BrowserRouter>
          <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
              <WalletModalProvider>
                <Routes />
              </WalletModalProvider>
            </WalletProvider>
          </ConnectionProvider>
        </BrowserRouter>
      </ConfigProvider>
    </>
  );
}

export default App;
