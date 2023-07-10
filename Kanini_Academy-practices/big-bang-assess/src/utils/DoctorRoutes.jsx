import { Outlet, Navigate } from 'react-router-dom';
import { useState } from 'react';

const DoctorRoutes = () => {
    const [doctor, setDoctor] = useState(localStorage.getItem("role")==="doctor" ? true : null);

    return doctor ? <Outlet /> : <Navigate to="/Home/Doctor" />;
}

export default DoctorRoutes