import './App.scss';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='app'>

      <BrowserRouter>
        <Header />
        <div className='container'>
        <Routes>
          <Route path="/" exact element={<Home />} >  </Route>
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route element={<PageNotFound />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
