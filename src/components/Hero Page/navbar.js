function NavBar() {
  return (
    <div class='navbar flex mb-2 shadow-none bg-none text-neutral-content w-screen'>
      {/* HAMBURGER */}
      <div class='flex-none w-8'>
        <button class='btn btn-square btn-ghost'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            class='inline-block w-6 h-6 stroke-current'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </button>
      </div>
      {/* logo */}
      <div class='flex-auto w-64 justify-center'>
        <p class='text-2xl text-white font-bold font-mono hover:text-gray-800 hover:font-sans'>
          HALCYON
        </p>
      </div>
    </div>
  )
}

export default NavBar
