import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div>
            <h1 className='text-blue-500 text-3xl text-center font-semibold p-10'>SignUp</h1>
            <form className=" flex flex-col max-w-md mx-auto gap-2 p-5 bg-slate-200">
                <input type="text" className=" bg-slate-100 p-3 rounded-lg border-gray-500 outline-none tracking-wide" placeholder="Username" id="username" />
    
                <input type="email" className=" bg-slate-100 p-3 rounded-lg border-gray-500 outline-none tracking-wide" placeholder="Email" id="email" />

                <input type="password" className=" bg-slate-100 p-3 rounded-lg border-gray-500 outline-none tracking-wide" placeholder="Password" id="password" />
                <button className=" bg-slate-800 text-white p-3 rounded-lg mt-3 cursor-pointer uppercase hover:opacity-95 "> Sign Up</button>
                <button className=" bg-red-600 text-white p-3 uppercase rounded-lg cursor-pointer hover:bg-red-500 tracking-wide mb-3"> Continue With Google</button>
                <div className=" text-center text-sm font-semibold">Have an account? <span className=" text-blue-400"><Link to="/login">Sign In</Link></span></div>
            </form>
        </div>
    )
}

export default SignUp;