import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/DNNSoftwareLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";
import { useState } from "react";

export default function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(user);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("sessionData");
    navigate("/login");
  };

  return (
 
    <nav className="bg-gray-700 text-white py-5 flex justify-between items-center">
      <ul className="flex px-8 space-x-5">
        <div>
          <li className="ml-auto">
            <img
              src={logo}
              alt="Logo"
              style={{
                width: 60,
                height: 60,
              }}
              className="rounded-full h-10 w-10 shadow-2xl"
            />
          </li>
        </div>
        <div className="flex relative items-center ">
          {!isAuthenticated ? null : (
            <>
              <li className="px-3">
                <Link to={"/"} className="border-b-2 border-transparent hover:border-green-200 hover:text-green-200">
                  Inicio
                </Link>
              </li>
              <li className="px-3">
                <Link
                  to={"/users"}
                  className="border-b-2 border-transparent hover:border-green-200 hover:text-green-200"
                >
                  Usuarios
                </Link>
              </li>
            </>
          )}
          <li className="px-3">
            <Link
              to={"/create-user"}
              className="border-b-2 border-transparent hover:border-green-200 hover:text-green-200"
            >
              Crear usuarios
            </Link>
          </li>
          {!isAuthenticated ? null : (
            <>
          <li className="px-3">
            <Link
              to={"/houses"}
              className="border-b-2 border-transparent hover:border-green-200 hover:text-green-200"
            >
              Casas
            </Link>
          </li>
          <li className="px-3">
            <Link
              to={"/create-house"}
              className="border-b-2 border-transparent hover:border-green-200 hover:text-green-200"
            >
              Crear casas
            </Link>
          </li>
          <li className="px-3">
            <Link to={"/chat"} className="border-b-2 border-transparent hover:border-green-200 hover:text-green-200">
              Chat
            </Link>
          </li>
          </>
          )}
        </div>
      </ul>
      {/*DropDown de usuario logueado*/}
      <div className="relative flex rounded-full bg-gray-700 focus:outine-none focus:rin-2 px-5">
        {isAuthenticated ? (
          <>
            <div className="relative">
              <img
                src={`https://restapinodejs.vercel.app/${user.avatar}`}
                alt="Avatar"
                className="rounded-full h-10 w-10 cursor-pointer"
                // onClick={toggleMenu}
                onMouseOver={toggleMenu}
                // onMouse
              />
              {isOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
                  onMouseLeave={toggleMenu}
                >
                  <p className="block px-4 py-2 text-sm text-red-400 font-bold">
                    {user.name} {user.lastname}
                  </p>
                  <Link
                    to={`/user/${user._id}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:font-bold"
                  >
                    Perfil
                  </Link>
                  <Link
                    to={"/change-password"}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:font-bold"
                  >
                    Cambiar contraseña
                  </Link>
                  <a
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer hover:font-bold"
                  >
                    Cerrar sesión
                  </a>
                </div>
              )}
            </div>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="border-b-2 border-transparent hover:border-green-200 hover:text-green-200"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
