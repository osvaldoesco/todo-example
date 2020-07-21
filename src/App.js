import React from 'react';

/* import List from './components/List'; */
import PokeCards from './components/PokeCards';
import NavBar from './components/NavBar';
/* import SideBar from './components/SideBar/SideBar'; */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
{/* <div >
<SideBar />
</div> 
<List />*/}  

function App() {
  return (
    <div className="App">
      <div className="col-12">
        <NavBar />
      </div>
      <div className="lisContainer col-12">
        <PokeCards />
      </div>
    </div>
  );
}

export default App;
