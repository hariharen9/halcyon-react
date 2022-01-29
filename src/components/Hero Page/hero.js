import NavBar from "./navbar";
import CallToAction from "./calltoaction";
import Location from "./location";
function Hero() {
  return (
    <div className="bg-cover bg-center h-screen bg-[url('black-1.jpg')]">
      <NavBar />
      <div className="flex h-5/6 justify-center items-center">
        <CallToAction />
      </div>
      <div className="flex justify-center items-center">
        <Location />
      </div>
    </div>
  );
}
export default Hero;
