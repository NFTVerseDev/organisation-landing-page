import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Main from './main/Main';
import { useState } from 'react';
import { LoginOtp } from './pages/LoginOtp/LoginOtp';
import { ClaimYourRewar } from './uicomponents/claim/ClaimYourRewar';


function App() {
  const [claimReward, setClaimedReward] = useState(false);
  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  const ipfsUrl = urlParams.get('ipfsUrl');
  const name = urlParams.get('name');
  const description = urlParams.get('description')
  const nftData = {
    name: name,
    description: description,
  }
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/loginotp" element={<LoginOtp />} />
        <Route path="/claimreward" element={<ClaimYourRewar/>} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
