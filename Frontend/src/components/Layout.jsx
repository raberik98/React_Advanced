import { Link, Outlet } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import { fetchEveryone } from "../services/people.service";

export const GlobalContext = createContext(null);

export function Layout() {
    const [globalData, setGlobalData] = useState(null)

    useEffect(() => {
        fetchEveryone().then(resp => setGlobalData(resp))
    },[])

  return (
    <GlobalContext.Provider value={{globalData, setGlobalData}}>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/info">Info</Link>
          <Link to="/asdasd">Something</Link>
          <a target="blank" href="https://youtube.com">
            youtube
          </a>
        </nav>
        <Outlet />
        <footer>No rights reserved!</footer>
      </div>
    </GlobalContext.Provider>
  );
}
