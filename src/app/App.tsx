import React from 'react';
import './App.scss';
import Header from "../components/Header/Header"
import Navigation from "../components/Navigation/Navigation"
import Footer from '../components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Abstracts from '../components/Routers/Abstracts/Abstracts';
import MyAbstracts from '../components/Routers/MyAbstracts/MyAbstracts';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
     <div className="main">
      <div className="main-container">
        <Navigation/>
        <div className="router">
          <Routes>
            <Route path="/abstracts" element={<Abstracts/>}/>
            <Route path="/my-abstracts" element={<MyAbstracts/>}/>
          </Routes>
        </div>
      </div>
     </div>
     <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
