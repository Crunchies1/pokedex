import React, { useReducer } from 'react'
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Routing from './pages/Routing';
import * as store from "./utils/store"

function App() {
  const [status, dispatch] = useReducer(store.reducer, store.initialState, store.init);
  const [darkStatus, darkDispatch] = useReducer(store.darkReducer, store.darkInitialState, store.darkInit);

  return (
    <store.DarkContext.Provider value={{ darkStatus: darkStatus, darkDispatch: darkDispatch }}>
      <store.SidebarContext.Provider value={{ sidebarStatus: status, sidebarDispatch: dispatch }}>
        <store.FilterProvider>
          <main className={darkStatus.status}>
            <Sidebar />
            <Header />
            <Routing />
          </main>
        </store.FilterProvider>
      </store.SidebarContext.Provider>
    </store.DarkContext.Provider>
  );
}

export default App;
