import React from 'react';
import './globals.css';
import Header from './header.js';
import TopCardList from './top-card-list.js';
import OverView from './overview';
import Switch from './switch';

function App() {
  return (
    <>
      <Header>
        <Switch />
      </Header>
      <TopCardList />
      <OverView />
    </>
  );
}

export default App;
