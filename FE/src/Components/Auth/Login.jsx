import React,{useState} from "react";
import Button from "../Button.tsx";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Cookies from 'js-cookie';
import { NavLink } from "react-router-dom";
import useStore from "../Store/store.jsx";
import { GInputs } from "./Signup.tsx";
import axios from "axios";
import { BASE_URL } from "../Home.jsx";

const Login = () => {
  const {url,setName,email, setMail,password, setPassword,error, setError,passwordError,setPasswordError} = useStore();
  const navigate = useNavigate();

  const loginFunc = () => {
        const data = {email,password}
        const headers = { 'Content-Type': 'application/json'}
        axios.post(`${BASE_URL}/login`,data,headers)
        .then(response => {
          const data = response.data
          if(data.status){
              console.log(data);
              setError("");
              setMail("");
              setPassword("");
              setName(data.fName)
              toast.success("Login Successful");
              setTimeout(() => {
                 navigate("/home")
              },2000);
              console.log(data.token)
              Cookies.set("Token" ,data.token);
              Cookies.set("Name" ,data.fName);
 
             
          }else if(!data.status && data.message === "Invalid email"){
             setError("Incorrect email");
             console.log("Incorrect email");
          }else if(!data.status && data.message === "Invalid password"){
             setPasswordError("Incorrect password");
             console.log("Incorrect password");
          }else if(!data.status && data.message === "Invalid credentials"){
             setError("Incorrect email");
             setPasswordError("Incorrect password");
 
          }
        }).catch(error => {
          console.error(error);
        });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    loginFunc()
  };

  return (
    <div className="w-full h-[100vh] bg flex align-middle justify-center">
      <div className="w-[100vw] px-4 md:p-0 md:w-[30vw]">
        <div>
          <h1 className="text-center font-bold text-xxl my-10">Login</h1>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <br />
            <GInputs
              value={email}
              onChange={(e) => {
                setMail(e.target.value)
                setError("")
              }}
              type="text"
              className
              placeholder="Email"
            />
            {error && (<small className="mb-6 text-red-600">{error}</small>)}
            <br />
            <label>Password</label>
            <br />
            <GInputs
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              type="password"
              className
              placeholder="Password"
            />
            {passwordError && (<small className="text-red-600">{passwordError}</small>)}

            <Button
              className="border mt-4 bg-gray-900 text-white shadow border-solid mb-4 p-2 rounded w-full"
              type="submit"
              value="Log In"
            />
            <div className="text-center">
              <small className="">Don't have an account? </small>
              <NavLink to="/"><span className="ms-2 font-bold text-blue-900">Signup</span></NavLink>
            </div>
          </form>
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
};

export default Login;
