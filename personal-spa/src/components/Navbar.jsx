function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center tracking-wide uppercase text-neutral-100 space-x-6 xl:space-x-12 z-50 py-4 px-4 sm:px-6 md:px-12 lg:px-24 top-0 sticky bg-slate-900 bg-[url('./src/assets/always-grey.png')] bg-center bg-fixed">
        <h1 className="font-bold sm:text-2xl drop-shadow-lg">
          Martin Alexander
        </h1>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-12 h-12 justify-center text-sm bg-blue-600 rounded-lg lg:hidden hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80 focus:bg-slate-900 focus:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-8 h-8"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden lg:flex space-x-12 h-10">
          <a
            href="#main"
            className="flex w-52 bg-blue-600 justify-center items-center rounded-md font-bold hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80"
          >
            Intro
          </a>
          <a
            href="#portfolio"
            className="flex w-52 bg-blue-600 justify-center items-center rounded-md font-bold hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="flex w-52 bg-blue-600 justify-center items-center rounded-md font-bold hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
