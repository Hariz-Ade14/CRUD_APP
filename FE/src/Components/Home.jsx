import React from 'react'
import Sidebar from './Sidebar.jsx'
import Header from './Header.tsx'
import { useLocation,Outlet } from 'react-router-dom'
import useStore from './Store/store.jsx'
import { createContext } from 'react'


export const NameContext = createContext();

export const BASE_URL = `http://localhost:8000`

const Home = () => {
    const location = useLocation();
    const isLogin = location.pathname !== "/login"

  return (
      <div className="layout">
         {isLogin && <Header/>} 
        <div className="main-content">
        
         {isLogin && <Sidebar />}
          <main className="mt-20 w-[80vw] float-right p-8">
            <Outlet />
          </main>
        </div>
      </div>
  );
}

export default Home;