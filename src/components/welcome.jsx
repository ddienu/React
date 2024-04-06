import logo from "../assets/DNNSoftwareLogo-NoBg.png";
export default function Welcome() {
  return (
    <body className="bg-gradient-to-r from-gray-400 to-gray-50">
      <div className="flex justify-center h-screen">
        <img src={logo} className="mt-20 mb-16 rounded-xl" />
      </div>
    </body>
  );
}
