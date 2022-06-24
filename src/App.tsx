import React from 'react';
import logo from './logo.svg';

import Topic from './page/topic'
import Top from './page/top'
import Profile from './page/profile'

import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import './css/App.css';
import { Helmet } from "react-helmet"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Top/>}/>
          <Route path={"/topic"} element={<Topic/>}/>
          <Route path={"/profile"} element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
