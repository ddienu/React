import Swal from "sweetalert2";
import { useLoginMutation } from "../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
      const response = await login(user);
      if(response.error && response.error.data.status == "error"){
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "error",
          title: response.error.data.message
        });
      }
      console.log(response.data.status)
      if(response.data.status == "success"){
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully"
        }).then(() => {
          navigate("/")
        })
      }
      // console.log(response.error.data.status)
      // // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-4 py-24">
        <label className="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="shadow appearance-none border rounded border w-80 focus:shadow-outline on"
          required
        ></input>
        <div className="mb-4 py-3">
          <label className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="shadow appearance-none border rounded w-80 focus:shadow-outline"
            required
          ></input>
          <div className="py-2"></div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 rounded text-blue-50 font-bold py-2 px-4"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
}
