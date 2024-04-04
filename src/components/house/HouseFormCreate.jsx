import { useNavigate } from 'react-router-dom'
import { useUpdateAvatarMutation } from '../../features/api/apiSlice';
import Swal from 'sweetalert2'
import { useState } from 'react';
import { useCreateHouseMutation } from '../../features/api/apiHouseSlice';
import HouseForm from './HouseForm';

export default function HouseFormCreate(){

    const navigate = useNavigate(); // Instanciamos la variable de useNavigate
    const [file, setFile] = useState(null);
    const [createHouse] = useCreateHouseMutation();
    const [uploadAvatar] = useUpdateAvatarMutation();

    const handleChangeAvatar = (e) => {
      setFile(e.target.files);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newHouse = await {
            address : e.target.address.value,
            city : e.target.city.value, 
            state : e.target.state.value.split("-")[1],
            size : e.target.size.value,
            type : e.target.type.value,
            zipCode : e.target.zipCode.value,
            rooms : e.target.rooms.value,
            bathrooms : e.target.bathrooms.value, 
            parking : e.target.parking.value,
            price : e.target.price.value,
            code : e.target.code.value
        };
        console.log(newHouse);
        try {
          const response = await createHouse(newHouse);
          console.log(response);
    
          if (response.data.status == "error") {
            // console.log(response.data.message);
            Swal.fire({
              icon: "error",
              title: response.data.status.toUpperCase(),
              text: response.data.message,
            })
          } else {

            // if(file){
            //   const formData = new FormData();
            //   formData.append("file", file[0]);
            //   uploadAvatar({_id : response.data._id, file: formData});
            // }
            Swal.fire({
              icon: "success",
              title: "Usuario creado correctamente",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              navigate("/users");
            });
          }
        } catch (error) {
            console.log(error);
        }
      };
      return (
        <HouseForm handleSubmit = {handleSubmit} house={null} />
        // handleChangeAvatar:handleChangeAvatar
    );
}
