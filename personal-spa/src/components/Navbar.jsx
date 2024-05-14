function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center tracking-wide uppercase text-neutral-100 space-x-12 z-50 py-4 mx-24 top-0 sticky bg-slate-900 bg-[url('./src/assets/always-grey.png')] bg-center bg-fixed">
        <h1 className="text-neutral-50 font-bold text-2xl drop-shadow-lg">
          Martin Alexander
        </h1>
        <div className="flex space-x-12">
          <a
            href="#main"
            className="flex flex-initial w-52 bg-blue-600 h-10 justify-center items-center rounded-md font-bold hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80"
          >
            Home
          </a>
          <a
            href="#portfolio"
            className="flex flex-initial w-52 bg-blue-600 h-10 justify-center items-center rounded-md font-bold hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="flex flex-initial w-52 bg-blue-600 h-10 justify-center items-center rounded-md font-bold hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
