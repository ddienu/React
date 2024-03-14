export default function UserList() {
  return (
    <>
      <div className="overflow-x-auto flex-justify-center px-5 py-5">
        <table className="table-auto divide-y border border-black w-full">
          <thead>
            <th className="px-6 py-3 bg-gray-400 text-center border border-black">Name</th>
            <th className="px-6 py-3 bg-gray-400 text-center border border-black">LastName</th>
            <th className="px-6 py-3 bg-gray-400 text-center border border-black"> Email</th>
            <th className="px-6 py-3 bg-gray-400 text-center border border-black">Identification</th>
            <th className="px-6 py-3 bg-gray-400 text-center border border-black">Avatar</th>
          </thead>
          <tbody>
            <tr className="hover:bg-border indigo-800">
              <td className="px-6 py-3 bg-gray-200 text-center border border-black hover:text-lg">Timo</td>
              <td className="px-6 py-3 bg-gray-200 text-center border border-black">Boll</td>
              <td className="px-6 py-3 bg-gray-200 text-center border border-black">timo@boll.com</td>
              <td className="px-6 py-3 bg-gray-200 text-center border border-black">1234567</td>
              <td className="px-6 py-3 bg-gray-200 text-center border border-black">
                <img
                  style={{
                    width: 50,
                    height: 50,
                  }}
                  src="https://butterflyonline.com/wp-content/uploads/2015/01/bollwc1.jpg"
                  alt="Timo Boll Avatar"
                  className="mx-auto transition-transform duration-150 transform hover:scale-110"
                />
              </td>
            </tr>
            <tr>
              <td className="px-6 py-3 bg-gray-200 text-center border border-black">Dimitrij</td>
              <td className="px-6 py-3 bg-gray-200 text-center border border-black">Ovtcharov</td>
              <td className="px-6 py-3 bg-gray-200 text-center border border-black">dima@ovtcharov.com</td>
              <td className="px-6 py-3 bg-gray-200 text-center border border-black">12345678</td>
              <td className="px-6 py-3 bg-gray-200 text-center border border-black">
                <img
                  style={{
                    width: 50,
                    height: 50,
                  }}
                  src="https://pro.butterfly.tt/player-men/images/ovtcharov-detail.jpg"
                  alt="Dimitrij Ovtcharov Avatar"
                  className="mx-auto transition-transform duration-150 transform hover:scale-110"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
