import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import WeekView from '../components/WeekView';
import IndividualWeekView from '../components/IndividualWeekView';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weekView" element={<WeekView />} />
          <Route path="/weekView/:id" element={<IndividualWeekView />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
