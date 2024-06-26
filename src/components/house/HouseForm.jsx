import { useState } from "react";
import {
  useGetDepartmentsQuery,
  useLazyGetCitiesByDepartmentQuery,
} from "../../features/api/apiColombiaSlice";

export default function HouseForm( props ) {

  const { handleSubmit, handleChangeImage, house } = props;

  const {
    data: departments,
    isLoading,
    isError,
    error,
  } = useGetDepartmentsQuery();

  const [selectedDeparment, setSelectedDepartment] = useState(5);

  const [getCities] = useLazyGetCitiesByDepartmentQuery();
  const [cities, setCities] = useState([]);

  const handleChangeDepartment = async (e) => {
    setCities([]); //=> Se limpia cualquier información que esté dentro de cities
    setSelectedDepartment(e.target.value);
    if (e.target.value) {
      const response = await getCities(e.target.value.split("-")[0]);
      setCities(response.data); //=> Llena la lista de ciudades
    }
  };

  if (isLoading)
    return (
      <div role="status" className="flex justify-center py-5">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  else if (isError) return <div>Error: {error.message} </div>;

  return (
    <body className="mb-5">
      <div className="max-w-md mx-auto px-5 py-5">
        <form onSubmit={handleSubmit} className="">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="shadow appearance-none border rounded w-full focus:shadow-outline"
              defaultValue={house?.address}
            ></input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">State</label>
            <select
              name="state"
              required
              className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-200 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              onChange={handleChangeDepartment}
              defaultValue={selectedDeparment}
            >
              <option value="">Seleccione el departamento</option>
              {departments.map((department) => (
                <option
                  key={department.id}
                  value={`${department.id}-${department.name}`}
                >
                  {department.name}
                </option>
              ))}
            </select>
          </div>
          {cities.length == 0 ? null : (
            <div>
              <label className="block text-gray-700 font-bold mb-4">City</label>
              <select
                name="city"
                required
                className="block mb-4 py-2.5 px-0 w-full text-bl bg-transparent border-0 border-b-2 border-gray-200 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option value="">Seleccione la ciudad</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Size</label>
            <input
              type="number"
              name="size"
              placeholder="Size"
              className="shadow appearance-none border rounded w-full focus:shadow-outline"
              defaultValue={house?.size}
            ></input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Type</label>
            <input
              type="string"
              name="type"
              placeholder="Type"
              className="shadow appearance-none border rounded w-full focus:shadow-outline"
              defaultValue={house?.type}
            ></input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              ZipCode
            </label>
            <input
              type="string"
              name="zipCode"
              placeholder="ZipCode"
              className="shadow appearance-none border rounded w-full focus:shadow-outline"
              defaultValue={house?.zipCode}
            ></input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Rooms</label>
            <input
              type="number"
              name="rooms"
              placeholder="Rooms"
              className="shadow appearance-none border rounded w-full focus:shadow-outline"
              defaultValue={house?.rooms}
            ></input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Bathrooms
            </label>
            <input
              type="number"
              name="bathrooms"
              placeholder="Bathrooms"
              className="shadow appearance-none border rounded w-full focus:shadow-outline"
              defaultValue={house?.bathrooms}
            ></input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Parking
            </label>
            <div className>
            <select
              name="parking"
              className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-200 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer text-center"
              defaultValue={house?.parking}
            >
              <option value={house?.parking}>Yes</option>
              <option value={house?.parking}>No</option>
            </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="shadow appearance-none border rounded w-full focus:shadow-outline"
              defaultValue={house?.price}
            ></input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Code</label>
            <input
              type="string"
              name="code"
              placeholder="Code"
              className="shadow appearance-none border rounded w-full focus:shadow-outline"
              defaultValue={house?.code}
            ></input>
          </div>
          <div className="flex items-center justify-center w-full">
          <label
            htmlFor="image"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="image"
              name="image"
              accept="image/png, image/jpeg"
              type="file"
              className="hidden"
              onChange={handleChangeImage}
            />
          </label>
        </div>
          <div className="py-4">
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-800 hover:text-green-200 rounded text-blue-100 font-bold py-2 px-4"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </body>
  );
}

//           {user ? null : (
//             <div className="mb-4">
//               <div>
//                 <label className="block text-gray-700 font-bold mb-2">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   className="shadow appearance-none border rounded w-full focus:shadow-outline"
//                 ></input>
//               </div>
//               <div className="py-2"></div>
//             </div>
//           )}
//           <div className="flex items-center justify-center w-full">
//             <label
//               htmlFor="avatar"
//               className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
//             >
//               <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                 <svg
//                   className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 20 16"
//                 >
//                   <path
//                     stroke="currentColor"
//                     d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
//                   />
//                 </svg>
//                 <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
//                   <span className="font-semibold">Click to upload</span> or drag
//                   and drop
//                 </p>
//                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                   SVG, PNG, JPG or GIF (MAX. 800x400px)
//                 </p>
//               </div>
//               <input
//                 id="avatar"
//                 name="avatar"
//                 accept="image/png, image/jpeg"
//                 type="file"
//                 className="hidden"
//                 onChange={handleChangeAvatar}
//               />
//             </label>

//       </div>
//     );
//   }
