import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
