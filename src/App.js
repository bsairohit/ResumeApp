import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarApp from './components/Navbar';

import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume  from './components/Resume';
function App() {
  return (<>
    {/* <NavbarApp />
    <CarouselApp />
    <Footer /> */}
    <Router>
      <Routes>
        <Route path="/" element={<> 
        <NavbarApp />
         <Resume/>
          <Footer /></>} />
          <Route path="" element={
          <> 
          <NavbarApp />
          <Resume />
          <Footer />
          </>} />
      </Routes>
    </Router>
  </>);
}

export default App;
 // "react-dom": "^17.0.2",
    // "react": "^17.0.2",