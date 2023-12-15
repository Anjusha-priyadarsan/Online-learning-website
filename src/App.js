import Home from './pages/Home';
import {Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Course from './pages/Course';


function App() {
  return (
    <>

    <Header />
    


    <div className='container m-5'>

      <Routes>

        <Route path='/' element={ <Home />} />
        <Route path='/course' element={ <Course />} />

        

        

      </Routes>

     


    </div>

    
    

      
     


    


    
    
    <Footer />
    

    
     
    </>
  );
}

export default App;
