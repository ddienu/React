import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-gray-800 text-white py-5 flex justify-between items-center">
      <ul className="flex px-8 space-x-5">
        <li>
          <Link to={"/"} className="hover:text-green-200 hover:font-bold">
            Inicio
          </Link>
        </li>
        <li>
          <Link to={"/users"} className="hover:text-green-200 hover:font-bold">
            Usuarios
          </Link>
        </li>
        <li>
          <Link to={"/create-user"} className="hover:text-green-200 hover:font-bold">
            Crear usuarios
          </Link>
        </li>
      </ul>
      <div className="relative flex rounded-full bg-gray-800 focus:outine-none focus:rin-2 px-5">
        <ul>
          <li>
            <Link to={"/login"} className="hover:text-green-200 hover:font-bold">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
