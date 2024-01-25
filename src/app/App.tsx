import React from 'react';
import './App.scss';
import Header from "../components/Header/Header"
import Navigation from "../components/Navigation/Navigation"
import Footer from '../components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Abstracts from '../components/Routers/Abstracts/Abstracts';
import MyAbstracts from '../components/Routers/MyAbstracts/MyAbstracts';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { initializeDataAction } from '../actions/articlesActions';
import { ArticlesData } from '../helpers/ArticlesData';

function App() {
  const dispatch = useDispatch()
  dispatch(initializeDataAction(ArticlesData))
  // const store = useSelector(state=>state);
  // console.log("Store: ", store);
  const storeArticles = useSelector((state : RootState)=>state.articles)
  console.log("Articles: ", storeArticles);
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
