export default function Login() {

  return (
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
          className="bg-blue-500 hover:bg-blue-700 rounded text-blue-50 font-bold py-2 px-4">
          Login
        </button>
      </div>
    </div>
  );
}
