import { Outlet, Navigate } from 'react-router-dom';
import { useState } from 'react';


const PrivateRoutes = () => {
    const [admin, setAdmin] = useState(localStorage.getItem("role")==="Admin" ? true : null);

    return admin ? <Outlet /> : <Navigate to="/Home/Admin" />;
}

export default PrivateRoutes