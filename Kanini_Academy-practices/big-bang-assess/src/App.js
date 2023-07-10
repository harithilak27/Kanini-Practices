import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
}from "react-router-dom";
import './App.css';
import Login from './pages/login/Login.jsx';
import Home from './pages/Home/Home.jsx';
import Admin from './pages/Admin/Admin.jsx';
import Register from "./pages/register/Register";
import Doctor from "./pages/doctor/Doctor";
import Patient from "./pages/patient/Patient.jsx";
import PrivateRoutes from "./utils/PrivateRoutes";
import DoctorRoutes from "./utils/DoctorRoutes";

function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />     
        <Route path="/Register" element={<Register/>}  />     
        <Route path="/Login" element={<Login/>} />         
        <Route element={<PrivateRoutes/>} >
          <Route path="/Home/Admin" element={<Admin />} />  
        </Route> 
        <Route element={<DoctorRoutes/>}>
          <Route path="/Home/Doctor" element={<Doctor/>} />  
        </Route>   
        <Route path="/Home/Patient" element={<Patient/>} />     
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
