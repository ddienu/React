import { useNavigate } from 'react-router-dom'
import { useUpdateAvatarMutation } from '../../features/api/apiSlice';
import Swal from 'sweetalert2'
import { useState } from 'react';
import { useCreateHouseMutation, useUploadImageMutation } from '../../features/api/apiHouseSlice';
import HouseForm from './HouseForm';

export default function HouseFormCreate(){

    const navigate = useNavigate(); // Instanciamos la variable de useNavigate
    const [file, setFile] = useState(null);
    const [createHouse] = useCreateHouseMutation();
    const [uploadImage] = useUploadImageMutation();

    const handleChangeImage = (e) => {
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
            parking : e.target.parking.value === "Yes" ? true : false,
            price : e.target.price.value,
            code : e.target.code.value
        };
        try {
          const response = await createHouse(newHouse);
          console.log(response);
    
          if (response.data.status == "error") {
            Swal.fire({
              icon: "error",
              title: response.data.status.toUpperCase(),
              text: response.data.message,
            })
          } else {
            if(file){
              const formData = new FormData();
              formData.append("file", file[0]);
              uploadImage({_id : response.data._id, file: formData});
            }
            Swal.fire({
              icon: "success",
              title: "Usuario creado correctamente",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              navigate("/houses");
            });
          }
        } catch (error) {
            console.log(error);
        }
      };
      return (
        <HouseForm handleSubmit={handleSubmit} handleChangeImage={handleChangeImage} house={null} />     
    );
}
