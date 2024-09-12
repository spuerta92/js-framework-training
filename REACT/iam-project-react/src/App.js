import './index.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CoverLetter from './components/CoverLetter';
import Views from './components/Views';
import Certifications from './components/Certifications';
import Repositories from './components/Repositories';
import Applications from './components/Applications';
import Testing from './components/Testing';
import NotFound from './components/NotFound';
import Unauthorized from './components/Unauthorized';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={ <Home /> }></Route>
            <Route path="/home" element={ <Home /> }></Route>
            <Route path="/views" element={ <Views /> }></Route>
            <Route path="/coverletter" element={ <CoverLetter /> }></Route>
            <Route path="/certifications" element={ <Certifications /> }></Route>
            <Route path="/repositories" element={ <Repositories /> }></Route>
            <Route path="/applications" element={ <Applications /> }></Route>
            <Route path="/testing" element={ <Testing /> }></Route>
            <Route path="/unauthorized" element={<Unauthorized /> }></Route>
            <Route path="*" element={ <NotFound /> }></Route>
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
