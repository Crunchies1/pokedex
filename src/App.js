import React, { useState, Fragment } from 'react'
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [useSidebar, setUseSidebar] = useState(false) 

  const extendSidebar = () => {
    useSidebar ? setUseSidebar(false) : setUseSidebar(true)
  }

  return (
    <Fragment>
      <Sidebar useSidebar={useSidebar}/>
      <Header useSidebar={useSidebar} extendSidebar={extendSidebar}/>
      <div>
      </div>
    </Fragment>
  );
}

export default App;
