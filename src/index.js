import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import './index.css';

const projectId = 'cfb3038207fee95504ecb68769cb62d2'

const zkTestnet = {
  chainId: 1442,
  name: 'zkEVM Testnet',
  currency: 'ETH',
  explorerUrl: 'https://testnet-zkevm.polygonscan.com',
  rpcUrl: 'https://rpc.public.zkevm-test.net'
}

const metadata = {
  name: 'Surat Proj',
  description: 'Blockchain based documentation',
  // url: 'https://mywebsite.com',
  // icons: ['https://avatars.mywebsite.com/']
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [zkTestnet],
  projectId
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </React.StrictMode>
);