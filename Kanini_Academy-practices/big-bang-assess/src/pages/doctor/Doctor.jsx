import {React, useEffect, useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Doctor.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Doctor() {

  const navigate = useNavigate();

  const [Data,setData] = useState([]);

  const [id,setId] = useState({
    AppointmentId : undefined
  });

  const handleChange = (e) => {
    setId((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    fetch("https://localhost:7192/api/Appointment")
    .then((res) => res.json())
        .then((data) => {
        console.log(data);
        setData(data);
         })
    .catch((err) => {
        console.log(err.message);
    });
   }, []);

   var deleteAppointment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.delete(`https://localhost:7192/api/Appointment/${id.AppointmentId}`);
      console.log(res);
      navigate('/Home/Doctor');
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

   console.log(localStorage.getItem("userid"));

  return (
    <div>
      <Navbar/>
      <div  className='table'>
        <table className='doctor'>
            <tr>
                <th>Patient Name</th>
                <th>Name</th>
                {/* <th>Mail</th> */}
                <th>Date</th>
                <th>Timing</th>
            </tr>
        {
        Data.map((item,i) => (
            // `${item.doctor}` === localStorage.getItem("userid") ? 
            <tr>
                <td>{item.appointmentId}</td>
                {/* <td>{item.email}</td> */}
                <td>{item.registeredrId}</td>
                <td>{item.date}</td>
                <td>{item.timing}</td>
                {/* <td></td> */}
            </tr>
        ))}
      </table>
      <div className='delete'>
          <h4>clear your appointments</h4>
          <input type='text' name='AppointmentId' className='AppointmentId' onChange={(e) => {handleChange(e)}} />  <br></br>
          <button className='clear' onClick={deleteAppointment}>Clear Appointment</button>    
      </div>
    </div>
    </div>
  )
}

export default Doctor
