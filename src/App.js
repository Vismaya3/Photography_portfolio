
import './App.css';

import Homeroute from './pages/Homepage/Homeroute';
//import Slider from './pages/Slider/Slider';


//import Nav from './pages/Navbar/Navbar';
//import Contact from './pages/Contact/Contact'
//import About from './pages/About/About'
//import ImageSlider from './pages/Imageslider/Imageslider'
//import Footer from './pages/Footer/Footer'
import Wedding from './pages/Gallery/Wedding/Wedding';
import Prewedding from './pages/Gallery/Prewedding/Prewedding';
import Babyshoot from './pages/Gallery/BabyShoot/BabyShoot';
import Model from './pages/Gallery/Model/Model';

//import Fillers from './pages/Fillers/Fillers';
//import Filler2 from './pages/Fillers/Filler2';
//import Review from './pages/Review/Review';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Redirect,
}from "react-router-dom";


function App() {
  return (
    
    <div className="App">
      
     
    {/*<Nav />*/}
      
      
      
     
     
     
      
       
      <>
    
    <Router>
      <Routes>
        <Route path="/" element={<Homeroute/>}/>
        <Route path="/wedding" element={<Wedding/>}/>
        <Route path="/babyshoot" element={<Babyshoot/>}/>
        <Route path="/prewedding" element={   <Prewedding/>}/>
        <Route path="/model" element={ <Model/>}/>


      </Routes>
      </Router>
      </>
      </div>
      
    
    
  );
}

export default App;
