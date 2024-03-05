import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './index.css'

import MainPage from './pages/MainPage'
import InfoPage from './pages/InfoPage'
import NotFound from './pages/NotFound'
import DisplayParams from './pages/DisplayParams'

import {Layout} from './components/Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route to={"/"} element={<Layout/>}>
        <Route path={"/"} element={<MainPage/>}/>
        <Route path={"/info"} element={<InfoPage/>}/>
        <Route path={"/display/:id"} element={<DisplayParams/>}/>
        <Route path={"*"} element={<NotFound/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
