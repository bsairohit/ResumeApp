import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarApp from './components/Navbar';

import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume  from './components/Resume';
function App() {
  return (<>

        <NavbarApp />
         <Resume/>
         <Footer/>
          
    
  </>);
}

export default App;
 // "react-dom": "^17.0.2",
    // "react": "^17.0.2",