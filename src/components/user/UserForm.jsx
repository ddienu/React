export default function UserForm() {
  return (
    <div className="max-w-md mx-auto px-5 py-5">
      <form action="" className="">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input type="text" name="name" placeholder="Name" className="shadow appearance-none border rounded w-full focus:shadow-outline"></input>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Lastname</label>
            <input type="text" name="Lastname" placeholder="Lastname" className="shadow appearance-none border rounded w-full focus:shadow-outline"></input>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" name="Email" placeholder="Email" className="shadow appearance-none border rounded w-full focus:shadow-outline"></input>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Identification</label>
            <input type="number" name="Identification" placeholder="Identification" className="shadow appearance-none border rounded w-full focus:shadow-outline"></input>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Password</label>
            <input type="password" name="Password" placeholder="Password" className="shadow appearance-none border rounded w-full focus:shadow-outline"></input>
            <div className="py-2"></div>
            <button type="button" className="bg-blue-500 hover:bg-blue-700 rounded text-blue-50 font-bold py-2 px-4">Save</button>
        </div>
      </form>
    </div>
  );
}
