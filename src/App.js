import React, { useReducer } from 'react'
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Routing from './pages/Routing';
import { SidebarContext, initialState, reducer, init } from "./utils/store"

function App() {
  const [status, dispatch] = useReducer(reducer, initialState, init);

  return (
    <SidebarContext.Provider value={{ sidebarStatus: status, sidebarDispatch: dispatch }}>
      <Sidebar />
      <Header />
      <Routing />
    </SidebarContext.Provider>
  );
}

export default App;
