import './App.css';
import Navbar from './components/navbar/Navbar';
import UseScrollBar from './components/usescrollbar/UseScrollBar';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="scrollbar" element={<UseScrollBar />} />
        </Routes>
        <h1>Footer</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
