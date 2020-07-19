import React from 'react';

import List from './components/List';
import PokeCards from './components/PokeCards';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="col-12">
        <NavBar />
      </div>
      <div >
        <SideBar />
      </div>
      <div className="lisContainer col-11">
        <List />
        <PokeCards />
      </div>
    </div>
  );
}

export default App;
