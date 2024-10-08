/* eslint-disable react/prop-types */
import ContactForm from "./contactForm";
import ProjectCards from "./ProjectCards";

export default function MainContent() {
  const projects = [
    {
      id: "project-0",
      path: "/project0/portfolio1.PNG",
      name: "The Online Bookstore",
      location: "Learn More",
      url: "/the-online-bookstore",
      description:
        "A full-stack book store web app developed using React.js for the Frontend client, Node.js and Express.js for the Backend API server, and MongoDB Atlas for the Database.",
    },
    {
      id: "project-1",
      path: "/reporting_app.png",
      name: "Invasive Species Reporting React PWA",
      url: "https://dwt-cw1.vercel.app/",
      location: "View Live App",
      description:
        "An assessment project that required me to develop a frontend progressive web application with ReactJS that utilized a minimum of two mobile device hardware APIs, which for this app was Geolocation and Webcam. The idea behind this app is to allow the user to report sightings of possible invasive species.",
    },
    {
      id: "project-2",
      path: "/project2/laravel1.png",
      name: "Laravel CRUD App",
      location: "View Github Repo",
      url: "/laravel",
      description:
        "An Assessment project that required me to develop a web app using the PHP framework Laravel. Features include CRUD functionality, alongside authentication and authorisation.",
    },
    {
      id: "project-3",
      path: "/project3/.netmvc0.png",
      name: "ASP.NET Core 6 MVC CRUD App",
      location: "View Github Repo",
      url: "/asp.net-core6-mvc",
      description:
        "Assessment project that required me to develop a web app using the C# framework ASP.NET Core MVC. Features include CRUD, searching and filtering functionality.",
    },
    {
      id: "project-4",
      path: "/reactportfolio.png",
      name: "Frontend React Portfolio App",
      location: "View Github Repo",
      url: "https://github.com/RogueBison/Portfolio-React-App",
      description:
        "Frontend Portfolio app designed with Figma, then built using the ReactJS UI library and Tailwind CSS. 'EmailJS' and the 'react-hook-form' library were used to implement the 'Contact Form' component. I used this project as an opportunity to learn a CSS Framework, as I heard of it them before but never used any, only ever using vanilla CSS.",
    },
    {
      id: "project-5",
      path: "/reshapehr.png",
      name: "Reshape HR",
      url: "https://reshapehr.com/",
      location: "View Live Website",
      description:
        "Complete design overhaul of the HR with EA WordPress.org website to coincide with the rebranding of the company to 'Reshape HR Limited'. Please view the 'Experience' section on my LinkedIn page for more details.",
    },
  ];

  const projectList = projects.map((project) => (
    <ProjectCards
      id={project.id}
      path={project.path}
      name={project.name}
      url={project.url}
      location={project.location}
      description={project.description}
      key={project.id}
      alt={project.name}
    />
  ));

  return (
    <>
      <main
        id="intro"
        className="sm:min-h-screen flex flex-col sm:flex-row w-full gap-8 md:gap-24 justify-center items-center"
      >
        <header className="sm:w-1/2 sm:block flex flex-col items-center justify-center mx-8">
          <h1 className="text-2xl sm:text-3xl md:text-5xl mb-6 font-bold drop-shadow-lg ">
            Hi, I&apos;m Martin Alexander
          </h1>
          <a
            className="bg-blue-600 py-2 px-8 inline-block rounded-md uppercase font-semibold hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80"
            href="/cv_martin_alexander.pdf"
            download
          >
            Download CV (PDF)
          </a>
          <article className="mt-6">
            <p className="drop-shadow-sm">
              I am a Web Developer with knowledge of both Frontend and Backend
              application development based in Cumbernauld, Scotland. I have
              recently completed a Web and Mobile Development course at UWS
              Paisley with a First-Class Honours degree.
            </p>
            <p className="mt-5">
              Throughout my studies at UWS, I gained invaluable experience with
              building full-stack, data driven applicatons using a wide array of
              various programming languages, frameworks and libraries.
            </p>
          </article>
        </header>
        <aside>
          <img
            src="/headshot.jpg"
            alt="martin alexander headshot"
            height={320}
            width={233}
            className="rounded-lg drop-shadow-lg shadow-slate-950"
          />
          <div className="other-links">
            <ul className="flex flex-row gap-8 mt-4 justify-evenly">
              <li>
                <a href="https://github.com/RogueBison/" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    className="fill-blue-600"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/martin-alexander-68421018b/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    className="fill-blue-600"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </main>
      <section
        id="portfolio"
        className="sm:min-h-screen flex flex-col justify-center items-center mt-32 lg:m-0"
      >
        <h2 className="text-4xl font-bold drop-shadow-lg">Portfolio</h2>
        {projectList}
      </section>
      <ContactForm />
    </>
  );
}
