function ProjectCards() {
  return (
    <>
      <h2 className="text-4xl font-bold">Portfolio</h2>
      <div
        id="project-1"
        className="flex flex-row bg-gray-800 w-full max-w-6xl h-64 mt-16 rounded-lg"
      >
        <div>
          {/* <img src="" alt="project 1" className="project-img" /> */}
          <div className="h-40 h-full w-80 bg-blue-600 rounded-l-lg">
            {" "}
            Image Placeholder Element
          </div>
        </div>
        <div className="px-6 py-8">
          <h3 className="font-semibold text-xl mb-1">Project Name</h3>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ipsum
            eget lacus suscipit sollicitudin. Nam vitae lorem velit. Integer
            quis commodo sem. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
          <a
            className="bg-blue-600 py-2 px-8 rounded-md uppercase font-semibold hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80"
            href=""
          >
            View Project
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectCards;
