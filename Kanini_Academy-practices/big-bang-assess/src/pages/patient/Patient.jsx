import {React, useState, useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Patient.css';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

function Patient() {

  const navigate = useNavigate();

  const [Data,setData] = useState([]);
  const [click,setClick] = useState(false);
  const onclick = () => {
    setClick(true);
  }
  const onclose = () => {
    setClick(false);
  }
  const [appointment,setAppointment] = useState({
    appointmentId: undefined,
    registeredrId: undefined,
    medicalService: undefined,
    doctor: undefined,
    date: "",
    timing: "",
    disabledButton: true
  })

  const handleChange = (e) => {
    setAppointment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if(appointment.appointmentId != undefined && appointment.registeredrId != undefined && appointment.date != "" && appointment.timing != ""){
        appointment.disabledButton = false;
    }
    console.log(appointment);
};

  useEffect(() => {
    fetch("https://localhost:7192/api/ActiveDoctors")
    .then((res) => res.json())
        .then((data) => {
        console.log(data);
        setData(data);
         })
    .catch((err) => {
        console.log(err.message);
    });
   }, []);

   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://localhost:7192/api/Appointment", appointment);
      console.log(res);
      navigate('/Home/patient')
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Navbar />
      <div className='grid'>
      {
      Data.map((item,i) => (
        <>
          <div className='doctor-detail'>
              <h4>Doctor Name : {item.userId}</h4>
              <p>Specialization : {item.specification}</p>
              <p>Experience : {item.experience}</p>
              <button type="button" className='book' onClick={onclick}>Book Appointment</button>
          </div>
          <div className={click ? 'appointment-form' : 'hidden'}>
              <p className='close' onClick={onclose}>X</p>
              <label>Patient id : </label>
              <input type='text' name='appointmentId' className='appointmentId' onChange={(e) => handleChange(e)}/>
              
              <label>userName : </label>
              <input type='text' name='registeredrId' className='registeredId' onChange={(e) => handleChange(e)}/>
              
              <label>Medical Service : </label>
              <input type='text' name='medicalService' className='medicalService' value={item.specification} onChange={(e) => handleChange(e)} />
              
              <label>Doctor : </label>
              <input type='text' name='doctor'  value={item.userId} onChange={(e) => handleChange(e)}/>
              
              <label>date : </label>
              <input type='date' name='date' className='date' onChange={(e) => handleChange(e)}/>
              
              <label>Timing : </label>
              <input type='time' name='timing' className='timing' onChange={(e) => handleChange(e)}/>
              
              <button disabled={appointment.disabledButton}  onClick={handleSubmit}>Submit</button>
          </div>
        </>
      ))}
      </div>
    </div>
  )
}

export default Patient
