function ProjectCards() {
  return (
    <>
      <section
        id="portfolio"
        className="min-h-screen flex flex-col justify-center items-center mt-32 lg:m-0"
      >
        <h2 className="text-4xl font-bold drop-shadow-lg">Portfolio</h2>
        <div
          id="project-1"
          className="flex flex-col mx-8 lg:flex-row bg-gray-800 items-center lg:h-72 max-w-lg lg:max-w-6xl mt-16 rounded-lg drop-shadow-md"
        >
          <img
            src="/reporting_app.png"
            alt="project 1 reporting react app"
            className="rounded-l-lg w-full max-h-72"
          />

          <div className="p-8">
            <h3 className="font-semibold text-xl mb-2 drop-shadow-lg">
              Invasive Species Reporting React PWA
            </h3>
            <p className="mb-4 drop-shadow-sm">
              Assessment project that required me to develop a frontend
              progressive web application with ReactJS that utilized a minimum
              of two mobile device hardware APIs, which for this app was
              Geolocation and Webcam. The idea behind this app is to allow the
              user to report sightings of possible invasive species.
            </p>
            <a
              className="flex flex-row justify-center lg:inline-block bg-blue-600 py-2 px-8 rounded-md uppercase font-semibold hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80"
              href="https://dwt-cw1.vercel.app/"
            >
              View Project
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectCards;
