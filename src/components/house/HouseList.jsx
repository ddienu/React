
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useGetHousesQuery, useRemoveHouseMutation } from "../../features/api/apiHouseSlice";
export default function HouseList() {
  /*Obtiene el estado de una variable con Redux
  const users = useSelector((state) => state.users);
  */
 const { data: houses, isLoading, isError, error} = useGetHousesQuery();
 const [deleteHouse] = useRemoveHouseMutation();

 const handleDelete = (house) => {
  Swal.fire({
    title: `¿Estás seguro de que deseas eliminar la casa con dirección ${house.address}, ${house.city}, ${house.state}?`,
    text: "¡Esta acción no se puede revertir!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Estoy seguro"
  }).then((result) => {
    if (result.isConfirmed) {
        deleteHouse(house._id);
      }
    });
 }

 if (isLoading) return <div role="status" className='flex justify-center py-5'>
 <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
     <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
 </svg>
 <span className="sr-only">Loading...</span>
</div>;
 else if(isError) return (<div>Error: {error.message} </div>)

//  const users = data;
  return (
    <>
      <div className="overflow-x-auto flex-justify-center px-5 py-5 h-screen w-full">
        <table className="table-auto divide-y border">
          <thead className="bg-gray-800 text-white">
            <th className="px-6 py-3 text-center">
                Address
            </th>
            <th className="px-6 py-3 text-center">
                City
            </th>
            <th className="px-6 py-3 text-center">
                State
            </th>
            <th className="px-6 py-3 text-center">
                Size
            </th>
            <th className="px-6 py-3 text-center">
                Type
            </th>
            <th className="px-6 py-3 text-center">
                ZipCode
            </th>
            <th className="px-6 py-3 text-center">
                Rooms
            </th>
            <th className="px-6 py-3 text-center">
                Bathrooms
            </th>
            <th className="px-6 py-3 text-center">
                Parking
            </th>
            <th className="px-6 py-3 text-center">
                Price
            </th>
            <th className="px-6 py-3 text-center">
                Code
            </th>
            <th className="px-6 py-3 text-center">
                Image
            </th>
            <th className="px-6 py-3 text-center">
                Actions
            </th>
          </thead>
          <tbody className="bg-white divide-y divide-white border-t"> 
            {houses.map(house => (
              <tr className="" key={house._id}>
                <td className="px-6 py-3 bg-gray-200 text-center">
                  {house.address}
                </td>
                <td className="px-6 py-3 bg-gray-200 text-center">
                  {house.city}
                </td>
                <td className="px-6 py-3 bg-gray-200 text-center">
                  {house.state}
                </td>
                <td className="px-6 py-3 bg-gray-200 text-center">
                  {house.size}
                </td>
                <td className="px-6 py-3 bg-gray-200 text-center">
                  {house.type}
                </td>
                <td className="px-6 py-3 bg-gray-200 text-center">
                  {house.zipCode}
                </td>
                <td className="px-6 py-3 bg-gray-200 text-centeblack">
                  {house.rooms}
                </td>
                <td className="px-6 py-3 bg-gray-200 text-center">
                  {house.bathrooms}
                </td>
                <td className="px-6 py-3 bg-gray-200 text-center">
                    {house.parking === true ? "Yes" : "No"}
                </td>
                <td className="px-6 py-3 bg-gray-200 text-center">
                  {house.price}
                </td>
                <td className="px-6 py-3 bg-gray-200 text-center">
                  {house.code}
                </td>
                <td className="px-6 py-3 bg-gray-200 text-center">
                  <img
                    style={{
                      width: 50,
                      height: 50,
                    }}
                    src={`https://restapinodejs.vercel.app/${house.image}`}
                    alt="House's image"
                    className="mx-auto transition-transform duration-150 transform hover:scale-110"
                  />
                </td>
                <td className="py-3 bg-gray-200 text-center">
                  <div className="inline-flex rounded-md" role="group">
                    <Link
                      to={`/house/${house._id}`}
                      className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center hover:shadow-lg hover:shadow-blue-800/50"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </span>
                      <span className="hidden md:inline-block">Edit</span>
                    </Link>
                    <button onClick={() => {
                      handleDelete(house)
                    }}
                    type="button"
                    className="text-slate-800 hover:text-red-500 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center hover:shadow-lg hover:shadow-red-500/20">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </span>
                      <span className="hidden md:inline-block">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
