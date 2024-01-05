import React from 'react';
import './App.scss';
import Header from "../components/Header/Header"
import Navigation from "../components/Navigation/Navigation"
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <div className="main">
      <div className="main-container">
        <Navigation/>
        <div className="router">
          {/* ROUTER */}
        </div>
      </div>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
