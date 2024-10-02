import React from 'react'
import { GInputs } from './Auth/Signup.tsx';
import useStore from './Store/store.jsx';

const Bookappointments = () => {
  const {firstname,lastname,othername,email,sex,setFirstname,setOthername,setLastname,setMail,setSex} = useStore();

  const bookAppointment = () => {
        // const url = "http://localhost:8080/bookings";
        // const bookingDetails = {
        //       name: firstname 
        // }
        // axios.post(urls,{})
  }

  const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstname,lastname,othername,email,sex);
        // bookAppointment();
  }
  return (
    <div className='text-slate-950'>
      <h4>
         Book Appointment
      </h4>
      <form className='my-10' onSubmit={handleSubmit}>
            <GInputs type="input" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder='Firstame'  customStyle='w-[50%] p-2'/>
            <br/>
            <GInputs type="input" value={othername} onChange={(e) => setOthername(e.target.value)} placeholder='Othername' customStyle='w-[50%] p-2'/>
            <br/>
            <GInputs type="input" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder='Lastname' customStyle='w-[50%] p-2'/>
            <br/>
            <GInputs type="email" value={email} onChange={(e) => setMail(e.target.value)} placeholder='Email' customStyle='w-[50%] p-2'/>
            <br/>
            <GInputs type="input" value={sex} onChange={(e) => setSex(e.target.value)} placeholder='Sex' customStyle='w-[50%] p-2'/>
            <br/>
            <button className='mt-5 bg-purple-600 text-white px-10 py-2'>Book</button>
      </form>
    </div>
  )
}

export default Bookappointments;