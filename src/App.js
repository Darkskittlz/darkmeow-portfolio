import './Styles/App.css';
import React from 'react'
import Layout from './components/layouts/article'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import Navbar from './components/navbar';
import Works from './components/Works';
import Posts from './components/Posts';
import BlogPost from './components/posts/Blog1';
import APMusic from './components/works/APMusic';
import Backgrounds from './components/works/Backgrounds';
import Bandingo from './components/works/Bandingo';
import Collab from './components/works/Collab';
import DarkMeowFi from './components/works/DarkMeowFi';
import DarkMeowShop from './components/works/DarkMeowShop';
import ECommerce from './components/works/ECommerce';
import MatiasSanes from './components/works/MatiasSanes';
import ThreejsPortfolio from './components/works/ThreejsPortfolio';

const App = ({ Component, pageProps, router }) => {
  return (
      <div className="app">
          <div className='main'>
              <Layout>
              <Navbar />
                  <div className='routes'>
                      <Routes>
                            <Route path='/' element={<Homepage />} />                            
                            <Route path='/Works' element={<Works />} />                            
                            <Route path='/Works/APMusic' element={<APMusic />} />                            
                            <Route path='/Works/Backgrounds' element={<Backgrounds />} />                            
                            <Route path='/Works/Bandingo' element={<Bandingo />} />                            
                            <Route path='/Works/Collab' element={<Collab />} />                            
                            <Route path='/Works/DarkMeowFi' element={<DarkMeowFi />} />                            
                            <Route path='/Works/DarkMeowShop' element={<DarkMeowShop />} />                            
                            <Route path='/Works/ECommerce' element={<ECommerce />} />                            
                            <Route path='/Works/MatiasSanes' element={<MatiasSanes />} />                            
                            <Route path='/Works/ThreejsPortfolio' element={<ThreejsPortfolio />} />                            
                            <Route path='/Posts' element={<Posts />} />                            
                            <Route path='/Posts/Blog1' element={<BlogPost />} />                            
                      </Routes>                       
                  </div>
              </Layout>
          </div>
      </div>
  )
}

export default App;
