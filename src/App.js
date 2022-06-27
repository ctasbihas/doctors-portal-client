import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';

function App() {
  return (
    <div className='max-w-[1366px] mx-auto'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<RequireAuth><Appointment /></RequireAuth>} />
        <Route path="/dashboard" element={
          <RequireAuth><Dashboard /></RequireAuth>
        }>
          <Route index element={<MyAppointments />} />
          <Route path='review' element={<MyReview />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
