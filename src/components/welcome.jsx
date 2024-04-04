import logo from "../assets/DNNSoftwareLogo.png";
export default function Welcome() {
  return (
    <body className="flex flex-col min-h-screen m-0 p-0">
      <div className="flex flex-grow justify-center items-center">
        <div className="text-center">
          <img src={logo} className="2xl:py-30 xl:py-28 lg: py-12 rounded-full" />
        </div>
      </div>
    </body>
  );
}

