import React from 'react'
import Cookies from "js-cookie";
import { useNavigate,NavLink } from 'react-router-dom';
import useStore from './Store/store';
import axios from 'axios';
import { BASE_URL } from './Home';

const Sidebar = () => {
  const navigate = useNavigate();
  const {setName} = useStore();
  const logout = () => {
         axios.post(`${BASE_URL}/logout`).then(response => {
               const data = response.data;
               console.log(data);
               Cookies.remove('Token');
               Cookies.remove('Name');
               setName("");
               setTimeout(() => {
                 navigate("/login");
               },1000)
               setName("");
         }).catch(error => {
          console.error(error);
        });
  
  }
  return (
    <div className='w-[20vw] h-full text-white bg-blue-800 m-0 pt-20 fixed left-0 bottom-0'>
        <h1 className='text-left ms-4 text-white mt-2'>CRUD APP</h1>
        <h3 className='ms-4 my-10'>Dashboard</h3>
        <ul className='list-none text-white text-xl'>
             <NavLink to='/home/bookings' className='no-underline decoration-none text-white'><li className='my-4'>Book Appointment</li></NavLink>
             <NavLink to='/home/allappointments'  className='no-underline decoration-none text-white'><li className='my-4'>All Appointments</li></NavLink>
             <NavLink to=''  className='no-underline decoration-none text-white'><li className='my-'>Others</li></NavLink>
        </ul>
        <button onClick={logout} className='ms-4 mt-40 px-5 py-2 rounded-xl text-xl bg-red-500 text-white'>Logout</button>

    </div>
  )
}

export default Sidebar