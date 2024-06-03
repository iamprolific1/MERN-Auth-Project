import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import axios from 'axios';
import Validation from "../utils/Validation";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false)
  // const [errorResponse, setErrorResponse] = useState("")

  const handleInput = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const validateErrors = Validation(formData);
    setErrorMessage(validateErrors);
    const hasErrors = Object.values(validateErrors).some(
      (error) => error !== undefined && error !== ""
    );
    
    if (hasErrors) {
      setLoading(false);
    }
    if(!hasErrors){
      try {
        const res = await axios.post("http://localhost:3000/signup", formData);
        const message = res.data.message;
        {toast.success(message)}
        setLoading(false);
        console.log(res);
        setErrorMessage(false);
      } catch (error) {
        console.error(error)
        if(error.response && error.response.data && error.response.data.error){
          const errorResponse = error.response.data.error;
          {toast.error(errorResponse)}
    
        }
        setLoading(false)
      }
    }

    
  }
  return (
    <div>
      <h1 className="text-blue-500 text-3xl text-center font-semibold p-10">
        SignUp
      </h1>
      {/* {errorResponse && (toast.error(errorResponse))} */}
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col max-w-md mx-auto gap-2 p-5 bg-slate-200"
      >
        <input
          type="text"
          className=" bg-slate-100 p-3 rounded-lg border-gray-500 outline-none tracking-wide"
          placeholder="Username"
          id="username"
          onChange={handleInput}
        />
        {errorMessage.username && (
          <div className=" text-red-600 tracking-wide">
            {errorMessage.username}
          </div>
        )}

        <input
          type="email"
          className=" bg-slate-100 p-3 rounded-lg border-gray-500 outline-none tracking-wide"
          placeholder="Email"
          id="email"
          onChange={handleInput}
        />
        {errorMessage.email && (
          <div className=" text-red-600 tracking-wide">{errorMessage.email}</div>
        )}

        <input
          type="password"
          className=" bg-slate-100 p-3 rounded-lg border-gray-500 outline-none tracking-wide"
          placeholder="Password"
          id="password"
          onChange={handleInput}
        />
        {errorMessage.password && (
          <div className=" text-red-600 tracking-wide">{errorMessage.password}</div>
        )}
        <button
          className=" bg-slate-800 text-white p-3 rounded-lg mt-3 cursor-pointer uppercase hover:opacity-95 "
          type="submit" disabled={loading}
        >
          {" "}
          {loading ? "Loading..." : "Sign Up" }
        </button>
        <button className=" bg-red-600 text-white p-3 uppercase rounded-lg cursor-pointer hover:bg-red-500 tracking-wide mb-3">
          {" "}
          Continue With Google
        </button>
        <div className=" text-center text-sm font-semibold">
          Have an account?{" "}
          <span className=" text-blue-400">
            <Link to="/login">Sign In</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
