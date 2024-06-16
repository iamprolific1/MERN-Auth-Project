import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../utils/loginValidation';
import axios from 'axios';
import { toast } from 'sonner';

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState(false);
  const [loading, showLoading] = useState(false);
  // const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    showLoading(true);
    const validateErrors = Validation(formData);
    setError(validateErrors);

    const hasErrors = Object.values(validateErrors).some((error) => error !== undefined && error !== "");
    if(!hasErrors){
      try {
        const res = await axios.post("http://localhost:3000/signin", formData, {
          withCredentials: true
        });
        const message = res.data.message;
        {toast.success(message)}
        showLoading(false);
        setError(false)
        navigate('/');
      } catch (error) {
        showLoading(false);
        if(error.response && error.response.data && error.response.data.error){
          const errorResponse = error.response.data.error;
          {toast.error(errorResponse)}
          throw error;
        }
        
      }
    }else{
      showLoading(false);
    }
  }

  // if(redirect){
  //   return <Navigate to="/" />
  // }
    return (
      <div>
        <h1 className="text-blue-500 text-3xl text-center font-semibold p-10">
          Sign In
        </h1>
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
          {error.username && (
            <div className=" text-red-500 tracking-wide">{error.username}</div>
          )}

          <input
            type="password"
            className=" bg-slate-100 p-3 rounded-lg border-gray-500 outline-none tracking-wide"
            placeholder="Password"
            id="password"
            onChange={handleInput}
          />
          {error.password && (
            <div className=" text-red-500 tracking-wide">{error.password}</div>
          )}
          <button disabled={loading} className=" bg-slate-800 text-white p-3 rounded-lg mt-3 cursor-pointer uppercase hover:opacity-95 ">
            {" "}
            {loading ? 'Loading...' : 'Sign In'}
          </button>
          <div className=" text-center text-sm font-semibold">
            Don`t Have an account?{" "}
            <span className=" text-blue-400">
              <Link to="/register">Sign Up</Link>
            </span>
          </div>
        </form>
      </div>
    );
}

export default SignIn;