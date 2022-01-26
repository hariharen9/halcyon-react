import NavBar from './navbar'
import CallToAction from './calltoaction'
function Hero() {
  return (
    <div className="bg-cover bg-center h-screen bg-[url('bg3.jpg')]">
      <NavBar />
      <div className='flex h-5/6 justify-center items-center'>
        <CallToAction />
      </div>
    </div>
  )
}
export default Hero
