import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div className='max-w-[1366px] mx-auto'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
