import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Admin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Admin() {

  const navigate = useNavigate();
  const [click,setClick] = useState(false);
  const [Data,setData] = useState([]);
  const [approvedDoctor,setApprovedDoctor] = useState([]);
  const [credentials, setCredentials] = useState([]);
  const [id,setId] = useState({
    userId : undefined
  });

  const handleChange = (e) => {
    setId((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  var deleteDoctor = async (id) => {
    // e.preventDefault();
    try {
      const docdel = await axios.delete(`https://localhost:7192/api/ActiveDoctors/${id}`);
      const userdel = await axios.delete(`https://localhost:7192/api/User/${id}`);
      console.log(docdel);
      navigate('/Home/Admin');
      window.location.reload();
    } catch (docdel) {
      console.log(docdel);
    }
  }

  var registerDoctor = async (d,id) => {
    // e.preventDefault();
    setCredentials(d); 
    try {
      const res = await axios.post("https://localhost:7192/api/User/Register", credentials);
      const appres = await axios.post("https://localhost:7192/api/ActiveDoctors", credentials);
      const delres = await axios.delete(`https://localhost:7192/api/Doctor/${id}`);
      console.log(delres);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  


  useEffect(() => {
    fetch("https://localhost:7192/api/Doctor")
    .then((res) => res.json())
        .then((data) => {
        console.log(data);
        setData(data);
         })
    .catch((err) => {
        console.log(err.message);
    });
   }, []);

   useEffect(() => {
    fetch("https://localhost:7192/api/ActiveDoctors")
    .then((res) => res.json())
        .then((data) => {
        console.log(data);
        setApprovedDoctor(data);
         })
    .catch((err) => {
        console.log(err.message);
    });
   }, []);
  
  console.log(Data);
  console.log(credentials);

  return (
    <>
      <Navbar />
      <div  className='table'>
        <table className='doctor'>
        <h4>Active Doctors</h4>
            <tr>
                <th>Name</th>
                {/* <th>Mail</th> */}
                <th>Gender</th>
                <th>Medical field</th>
                <th>Experience</th>
                <th>Approval</th>
            </tr>
        {
        Data.map((item,i) => (
            <tr>
                <td>{item.userId}</td>
                {/* <td>{item.email}</td> */}
                <td>{item.gender}</td>
                <td>{item.specification}</td>
                <td>{item.experience}</td>
                <td>
                    <button onClick={() => {setCredentials(Data[i]); registerDoctor(Data[i],item.userId)}}>Approve</button>
                </td>
            </tr>
        ))}
        </table>

      <table className='doctor'>
            <h4>Active Doctors</h4>
            <tr>
                <th>Name</th>
                {/* <th>Mail</th> */}
                <th>Gender</th>
                <th>Medical field</th>
                <th>Experience</th>
            </tr>
        {
        approvedDoctor.map((item,i) => (
            <tr>
                <td>{item.userId}</td>
                {/* <td>{item.email}</td> */}
                <td>{item.gender}</td>
                <td>{item.specification}</td>
                <td>{item.experience}</td>
            </tr>
        ))}
        </table>
          <div className='delete'>
          <h4>clear your appointments</h4>
          <input type='text' name='userId' className='userId' onChange={(e) => {handleChange(e)}}/>  <br></br>
          <button className='clear' onClick={() => {deleteDoctor(id.userId)}}>Clear Appointment</button>    
      </div>
      </div>
    </>
)
}

export default Admin
