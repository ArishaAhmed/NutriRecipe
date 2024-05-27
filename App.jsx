import { useState } from 'react'
import DiseasePage from './Diseases.jsx'
import HomePage from './Home.jsx'
import MenuPage from './Menu.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import {BrowserRouter,Routes,Route} from "react-router-dom"


const App = () => {
  return(
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/diseases" element={<DiseasePage/>}/>
      <Route path="/menu" element={<MenuPage/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    </>

  );

};


export default App
