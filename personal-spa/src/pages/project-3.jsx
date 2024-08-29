import { Link } from "react-router-dom";

export default function Project3() {
  return (
    <>
      <div className="sm:min-h-screen flex flex-col sm:flex-row w-full gap-8 md:gap-4 justify-center items-center py-24">
        <div className="sm:block flex items-center justify-center mx-8">
          <div className="flex gap-12 items-center">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold drop-shadow-lg">
              ASP.NET Core MVC CRUD Application
            </h2>
            <div>
              <Link
                to="https://github.com/RogueBison/IT-CW2-ASP.NET-Core-6-MVC-App"
                className="bg-blue-600 py-2 px-8 inline-block rounded-md uppercase font-semibold hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80 mr-6"
              >
                View Github Repo
              </Link>
            </div>
          </div>
          <article className="mt-14">
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-4 md:gap-6 xl:gap-8">
              <img
                src="/project3/.netmvc0.png"
                loading="lazy"
                className="rounded-lg md:col-span-2"
              />

              <img
                src="/project3/.netmvc1.png"
                loading="lazy"
                className="rounded-lg md:col-span-2"
              />

              <img
                src="/project3/.netmvc2.png"
                loading="lazy"
                className="rounded-lg md:col-span-2"
              />

              <img
                src="/project3/.netmvc3.png"
                loading="lazy"
                className="rounded-lg md:col-span-2"
              />

              <img
                src="/project3/.netmvc4.png"
                loading="lazy"
                className="rounded-lg md:col-span-2"
              />

              <img
                src="/project3/.netmvc5.png"
                loading="lazy"
                className="rounded-lg md:col-span-2"
              />

              <img
                src="/project3/.netmvc6.png"
                loading="lazy"
                className="rounded-lg md:col-span-2"
              />

              <img
                src="/project3/.netmvc7.png"
                loading="lazy"
                className="rounded-lg md:col-span-2"
              />
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
