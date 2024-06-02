import { Link } from 'react-router-dom'
const SignIn = () => {
    return (
      <div>
        <h1 className="text-blue-500 text-3xl text-center font-semibold p-10">
          Sign In
        </h1>
        <form className=" flex flex-col max-w-md mx-auto gap-2 p-5 bg-slate-200">
          <input
            type="text"
            className=" bg-slate-100 p-3 rounded-lg border-gray-500 outline-none tracking-wide"
            placeholder="Username"
            id="username"
          />

          <input
            type="password"
            className=" bg-slate-100 p-3 rounded-lg border-gray-500 outline-none tracking-wide"
            placeholder="Password"
            id="password"
          />
          <button className=" bg-slate-800 text-white p-3 rounded-lg mt-3 cursor-pointer uppercase hover:opacity-95 ">
            {" "}
            Sign In
          </button>
          {/* <button className=" bg-red-600 text-white p-3 uppercase rounded-lg cursor-pointer hover:bg-red-500 tracking-wide mb-3 text-md">
            {" "}
            Sign-In with your google account
          </button> */}
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