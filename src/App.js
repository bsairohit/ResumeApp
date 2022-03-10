import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarApp from './components/Navbar';

import Footer from './components/Footer'
import Resume from './components/Resume'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (<>
  <NavbarApp />
          <Resume />
          <Footer />
 
    {/* <Router>
      <Routes>
        <Route path="/" element={<> <NavbarApp />
          <Resume />
          <Footer /></>} />
         
      </Routes>
    </Router> */}
  </>);
}

export default App;
