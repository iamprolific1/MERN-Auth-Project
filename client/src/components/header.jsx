import { Link } from 'react-router-dom'

function Header() {
    return (
      <div className="bg-slate-200">
        <div className=" flex justify-between p-3 items-center max-w-6xl mx-auto">
          <Link to="/">
            <h1 className="font-bold cursor-pointer">Auth Project</h1>
          </Link>
          <ul className="flex gap-4">
            <Link to="/">
                <li>Home</li> 
            </Link>
            <Link to="about">
                <li>About</li>
            </Link>
            <Link to="/login">
                <li>Sign In</li>
            </Link>
          </ul>
        </div>
      </div>
    );
}

export default Header
