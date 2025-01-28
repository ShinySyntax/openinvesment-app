import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Buy from './pages/Buy';
import Sell from './pages/Sell';
import Swap from './pages/Swap';
import Account from './pages/Account';
import Guide from './pages/Guide';
import './index.css';
import { IdentityKitProvider } from '@nfid/identitykit/react';
import '@nfid/identitykit/react/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IdentityKitProvider
      // authType={IdentityKitAuthType.DELEGATION}
      signerClientOptions={{
        targets: ['bd3sg-teaaa-aaaaa-qaaba-cai'],
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Buy />} />
            <Route path="sell" element={<Sell />} />
            <Route path="swap" element={<Swap />} />
            <Route path="account" element={<Account />} />
            <Route path="guide" element={<Guide />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </IdentityKitProvider>
  </React.StrictMode>
);
