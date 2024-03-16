import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addUser } from "../../features/userSlice";
import { useEffect } from "react";


export default function UserForm() {

  const dispatch = useDispatch();
  const navigate = useNavigate(); //==> Se instancia la variable de useNavigate.
  const params = useParams();//=Z Se instancia la variable para obtener los parametros por URL

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name : e.target.name.value,
      lastname : e.target.lastname.value,
      email : e.target.email.value,
      id : e.target.identification.value,
      password : e.target.password.value
    }
    dispatch(addUser(newUser));

    navigate("/users");//==> Se redirecciona al path /users
  }

  /*Se ejecuta al cargar el componente*/
  useEffect(() => {
    console.log(params.id);
  })

  return (
    <div className="max-w-md mx-auto px-5 py-5">
      <form onSubmit={handleSubmit} className="">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="shadow appearance-none border rounded w-full focus:shadow-outline"
          ></input>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Lastname</label>
          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            className="shadow appearance-none border rounded w-full focus:shadow-outline"
          ></input>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="shadow appearance-none border rounded w-full focus:shadow-outline"
          ></input>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Identification
          </label>
          <input
            type="number"
            name="identification"
            placeholder="Identification"
            className="shadow appearance-none border rounded w-full focus:shadow-outline"
          ></input>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="shadow appearance-none border rounded w-full focus:shadow-outline"
          ></input>
          <div className="py-2"></div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 rounded text-blue-50 font-bold py-2 px-4"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
