import React, { ChangeEvent, useState } from "react";
import Button from "../Button.tsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import useStore from "../Store/store.jsx";
import { BASE_URL } from "../Home.jsx"

type InputProps = {
     type: "text" | "email" | "password";
     value: string;
     onChange: () => void;
     placeholder: string;
     required: boolean;
     customStyle?: string
}

export const GInputs = ({type,customStyle,value,onChange,placeholder,required}: InputProps) => {
       const baseClass = "mt-1 mb-4 border-b shadow outline-none border-solid border-black p-2 rounded w-full"
  
       return (
         <input
         type={type}
         value={value}
         onChange={onChange}
         className={`${baseClass} ${customStyle}`}
         placeholder={placeholder}
         required={required}
       /> 
       )
}

const Signup = () => {
  const {url,name,setName,email, setMail,password, setPassword,error, setError,loading, setLoading} = useStore();

  const navigate = useNavigate();

  const createUser = () => {
    axios
      .post(`${BASE_URL}/signup`, {
        name,
        email,
        password,
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        if (data.Data) {
          toast.success("Account created successfully");
          setLoading(false);
          setName("");
          setMail("");
          setPassword("");
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        } else if (!data.status) {
          toast.warning("User already exists");
        }
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    createUser();
  };

  return (
    <div className="w-full h-[100vh] bg flex align-middle justify-center">
      <div className="w-[100vw] px-4 md:p-0 md:w-[30vw]">
        <div>
          <h1 className="text-center font-bold text-xxl my-10">
            Create Account
          </h1>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <br />
            <GInputs type="text" value={name} placeholder="Name" required onChange={(e) => setName(e.target.value)}/>
            <br />
            <label>Email</label>
            <br />
            <GInputs type="email" value={email} placeholder="Email" required onChange={(e) => setMail(e.target.value)}/>
            <br />
            <label>Password</label>
            <br />
            <GInputs type="password" value={password} placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
            
            <div className="border text-center bg-gray-900 text-white shadow border-solid mb-4 p-2 rounded w-full">
              {loading ? (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                  </div>
                </div>
              ) : (
                <Button className="" type="submit" value="Create Account" />
              )}
            </div>

            <div className="text-center">
              <small className="">Already have an account? </small>

              <NavLink to="/login">
                <span className="ms-2 font-bold text-blue-900">Login</span>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
