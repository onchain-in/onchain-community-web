import React, { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import HomePage from "@pages/Home";
import Header from "@components/HeaderBar";

require("@solana/wallet-adapter-react-ui/styles.css");

const App = () => {
  // const network = WalletAdapterNetwork.Devnet;
  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const network = "localnet";
  const endpoint = useMemo(() => "http://127.0.0.1:8899", [network]);
  const wallets = useMemo(() => [new PhantomWalletAdapter()], [network]);

  return (
    <>
      {/* <GlobalStyle /> */}
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            {/* <Header /> */}
            <BrowserRouter>
              <Routes>
                <Route path="/home" element={<HomePage />} />
              </Routes>
            </BrowserRouter>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
};
export default App;