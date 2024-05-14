import ContactForm from "./components/contactForm";
import ProjectCards from "./components/ProjectCards";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <>
      <div className="page-container bg-slate-900 text-neutral-50 min-h-screen text-lg bg-[url('./src/assets/always-grey.png')] bg-center bg-fixed">
        <Navbar />
        <div className="container mx-auto">
          <section
            id="main"
            className="min-h-screen flex flex-row w-full gap-24 justify-center items-center"
          >
            <header className=" w-6/12">
              <h1 className="text-5xl mb-10 font-bold drop-shadow-lg">
                Hi, I'm Martin Alexander
              </h1>
              <a
                className="bg-blue-600 py-4 px-8 rounded-md uppercase font-semibold hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80"
                href="/cv_martin_alexander.pdf"
                download
              >
                {"Download CV (PDF)"}
              </a>
              <article className="mt-10">
                <p className="drop-shadow-sm">
                  I am a Web Developer with knowledge of both Frontend and
                  Backend application development based in Cumbernauld,
                  Scotland. I have recently completed my BSc (Hons) in Web and
                  Mobile Development at UWS Paisley, and I have full confidence
                  that I will achieve a first class award.
                </p>
                <p className="mt-5">
                  Throughout my studies at UWS, I gained invaluable experience
                  with building full-stack, data driven applicatons using a wide
                  array of various programming languages, frameworks and
                  libraries.
                </p>
              </article>
            </header>
            <aside>
              <img
                src="./src/assets/headshot.jpg"
                alt="martin alexander headshot"
                className="rounded-lg h-80 drop-shadow-lg shadow-slate-950"
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
          </section>
          <section
            id="portfolio"
            className="min-h-screen flex flex-col justify-center items-center"
          >
            <ProjectCards />
          </section>
          <section
            id="contact"
            className="min-h-screen flex flex-col justify-center items-center"
          >
            <ContactForm />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
