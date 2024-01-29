import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <nav id="navigation-bar" className="bg-slate-700 p-4 shadow-md">
            <ul className="flex justify-center space-x-4">
                <li className="text-white hover:text-gray-300">
                    <Link to="/" className="transition duration-300 ease-in-out">Home</Link>
                </li>
                <li className="text-white hover:text-gray-300">
                    <Link to="/breaker" className="transition duration-300 ease-in-out">Brick Breaker</Link>
                </li>
            </ul>
        </nav>
    )
}
