function Navbar() {
  return (
    <>
      <nav className="flex justify-center bg-gray-800 rounded-full shadow-xl shadow-gray-950/50 text-center uppercase tracking-wide text-neutral-100 space-x-28 py-6 sticky top-8 ">
        <a
          href="#main"
          className="flex flex-initial w-52 bg-blue-600 h-10 justify-center items-center rounded-full font-bold hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80"
        >
          Home
        </a>
        <a
          href="#portfolio"
          className="flex flex-initial w-52 bg-blue-600 h-10 justify-center items-center rounded-full font-bold hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80"
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className="flex flex-initial w-52 bg-blue-600 h-10 justify-center items-center rounded-full font-bold hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80"
        >
          Contact
        </a>
      </nav>
    </>
  );
}

export default Navbar;
