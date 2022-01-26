import react from "react";
import NavBar from "./navbar";
import CallToAction from "./calltoaction";
function Hero() {
  return (
    <div className="bg-cover bg-center h-screen bg-[url('C:\Users\ssbal\Desktop\Miscellaneous\Halcyon\halcyon-react\src\components\bg.jpg')]">
      <NavBar />
      <div className="flex h-5/6 justify-center items-center">
        <CallToAction />
      </div>
    </div>
  );
}
export default Hero;
