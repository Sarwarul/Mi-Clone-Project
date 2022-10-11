
import './App.css';
// import Navbar from './Components/Navbar';
// import Prenavbar from './Components/Prenavbar';
// import Slider from './Components/Slider';
import {BrowserRouter as Router} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';


function App() {
  return (

    
    // <Router>
    //    <Prenavbar/>
    //       <Navbar/>
    //        <Slider/>

    //  </Router>
    <Carousel>
    <Carousel.Item>
     <img className= "d-block w-100"
     scr= "https://i02.appmifile.com/173_operator_in/09/06/2021/fde866737ea0357305c2d1c852541460.gif"  />
     <Carousel.Caption>
         <h3>First Slide Label</h3>
         <h3>nulla vitae elit liberto, a pharetra  augue mollis interdrum</h3>
     </Carousel.Caption>
      </Carousel.Item>
   </Carousel>
 
    

          
    
  );
}

export default App;
