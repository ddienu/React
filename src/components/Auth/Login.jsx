import Swal from "sweetalert2";
import { useLoginMutation } from "../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../features/authSlice";
import { useEffect } from "react";

export default function Login() {
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const sessionData = localStorage.getItem('sessionData');
    if(sessionData){
      navigate("/");
    }
  })

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
      const response = await login(user);
      console.log(response);
      if (response.error && response.error.data.status == "error") {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "error",
          title: response.error.data.message,
        });
      }
      if (response.data && response.data.status == "success") {
        localStorage.setItem("sessionData", JSON.stringify(response.data));
        dispatch(loginSuccess(response.data));
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        }).then(() => {
          navigate("/");
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="relative flex flex-col items-center justify-center"
      >
        <div className="xl:py-48 xl:h-screen xxL:h-screen">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="shadow appearance-none border rounded border w-80 focus:shadow-outline on pl-5"
            required
            autoComplete="off"
            autoFocus
          ></input>
          <div className="mb-4 py-3">
            <label className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-80 focus:shadow-outline pl-5"
              required
            ></input>
            <div className="py-2"></div>
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-800 hover:text-green-200 rounded text-blue-100 font-bold py-2 px-4"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
