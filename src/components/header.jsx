import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <nav className="bg-gray-800 text-white py-5">
        <ul className="flex px-8 space-x-5">
          <li>
            <Link to={"/"} className="hover:text-blue-500">
              Inicio
            </Link>
          </li>
          <li>
            <Link to={"/users"} className="hover:text-blue-500">
              Usuarios
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
