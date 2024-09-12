import './App.css';
import './css/header.css';
import './css/footer.css';
import './css/main.css';
import './css/coverletter.css';
import './css/views.css';
import './css/repositories.css';
import './css/applications.css';
import './css/testing.css';
import './css/notfound.css';
import './css/unauthorized.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import CoverLetter from './components/CoverLetter';
import Views from './components/Views';
import Repositories from './components/Repositories';
import Applications from './components/Applications';
import Testing from './components/Testing';
import NotFound from './components/NotFound';
import Unauthorized from './components/Unauthorized';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={ <Main /> }></Route>
          <Route path="/home" element={ <Home /> }></Route>
          <Route path="/views" element={ <Views /> }></Route>
          <Route path="/coverletter" element={ <CoverLetter /> }></Route>
          <Route path="/unauthorized" element={<Unauthorized /> }></Route>
          <Route path="*" element={ <NotFound /> }></Route>
        </Routes>
      <Footer />

    </div>
  );
}

export default App;
