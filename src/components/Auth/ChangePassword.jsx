import { useState } from "react";
import Swal from "sweetalert2";
import { useLoginMutation, useUpdateUserMutation } from "../../features/api/apiSlice";
import { useSelector } from "react-redux";

export default function ChangePassword() {
  let actualVsNewPassword = false;
  const [actualPassword, setActualPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordsAreEquals, setPasswordsAreEquals] = useState(false);
  const [isError, setIsError] = useState(false);

  const getActualPassword = (e) => {
    setActualPassword(e.target.value);
  } 
  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmNewPassword = (e) => {
    setPasswordsAreEquals(!(newPassword === e.target.value));
    s
  };

  if( actualPassword === newPassword ){
    actualVsNewPassword = true;
  }

  console.log(actualVsNewPassword);

  const user = useSelector((state) => state.auth.user);
  const [login] = useLoginMutation();
  const [updateUser] = useUpdateUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsError(false);
    const userValidate = {
        email: user.email,
        password: e.target.password.value,
    };

    const response = await login(userValidate);
    if( response.error && response.error.data == "error"){
        setIsError(true);
    }else{
        if(!passwordsAreEquals){
            const newUser = {
                _id: user._id,
                password: e.target["new-password"].value,
            }
            // console.log("Esto es newUser");
            // console.log(newUser);
            const response = await updateUser(newUser);
            if(response.data.status == "error"){
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
                    title: "Error actualizando la contraseña"
                  });
            }else{
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
                    title: "Contraseña actualizada correctamente"
                  })
            }
        }
    }
  };

  return (
    <center>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 py-24">
          <div className="mb-4 py-3">
            <label className="block text-gray-700 font-bold mb-2">
              Contraseña actual:
            </label>
            {actualVsNewPassword ? (
              <span className="block text-red-400 font-bold">
                Las nueva contraseña no puede ser igual a la anterior
              </span>
            ) : null}
            <input
              type="password"
              name="password"
              placeholder="contraseña"
              className="shadow appearance-none border rounded w-80 focus:shadow-outline"
              onChange={getActualPassword}
              required
            ></input>
            <div className="py-2"></div>
            <label className="block text-gray-700 font-bold mb-2">
              Nueva contraseña:
            </label>
            <input
              type="password"
              name="new-password"
              placeholder="nueva contraseña"
              className="shadow appearance-none border rounded w-80 focus:shadow-outline"
              required
              onChange={handleChangeNewPassword}
            ></input>
            <div className="py-2"></div>
            <label className="block text-gray-700 font-bold mb-2">
              Repetir nueva contraseña:
            </label>
            <input
              type="password"
              name="repeat-new-password"
              placeholder="repetir nueva contraseña"
              className="shadow appearance-none border rounded w-80 focus:shadow-outline"
              required
              onChange={handleConfirmNewPassword}
            />
            {passwordsAreEquals ? (
              <span className="block text-red-400 font-bold">
                Las contraseña no coinciden
              </span>
            ) : null}
            <div className="py-2"></div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 rounded text-blue-50 font-bold py-2 px-4"
            >
              Cambiar contraseña
            </button>
          </div>
        </div>
      </form>
    </center>
  );
}
