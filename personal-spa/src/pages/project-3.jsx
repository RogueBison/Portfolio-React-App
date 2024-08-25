import { Link } from "react-router-dom";

export default function Project3() {
  return (
    <>
      <div className="sm:min-h-screen flex flex-col sm:flex-row w-full gap-8 md:gap-4 justify-center items-center py-24">
        <div className="sm:block flex items-center justify-center mx-8">
          <div className="flex gap-12 items-center">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold drop-shadow-lg">
              The Online Bookstore
            </h2>
            <div>
              <Link
                to="https://github.com/RogueBison/MERN-Full-Stack-Book-App"
                className="bg-blue-600 py-2 px-8 inline-block rounded-md uppercase font-semibold hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80 mr-6"
              >
                View Github Repo
              </Link>
              <Link
                to="https://frontend-client-coral.vercel.app/"
                className="bg-blue-600 py-2 px-8 inline-block rounded-md uppercase font-semibold hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80"
              >
                Visit Live App
              </Link>
            </div>
          </div>
          <article className="mt-14">
            <iframe
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FGqOvmQThGYJhAKggaFvhFm%2F%2522The-Online-Bookstore%2522-%257C-Full-Stack-MERN-App%3Ft%3DeLJv8qvn6x0YRLCz-1"
              allowFullScreen
              height="350"
              width="550"
              className="float-right ml-8 rounded-lg border-2"
            />
            <p className="drop-shadow-sm">
              <span className="italic">&quot;The Online Bookstore&quot;</span>{" "}
              is intended to be an E-Commerce book store inspired by similar
              websites such as{" "}
              <a href="https://www.waterstones.com/">Waterstones.com</a> and{" "}
              <a href="https://uk.bookshop.org/">Bookshop.org.</a> It is a
              full-stack application developed using the MERN stack. The React
              library was used for the Frontend client app, with Node and the
              Express framework used to develop the Backend API server, and
              MongoDB Atlas for the Database.
            </p>
            <p className="mt-4">
              I designed the UI for the Frontend application using the interface
              design tool Figma. During this stage I also took the time to plan
              out what features I wanted the app to have and the technologies
              required to implement them e.g., JSON Web Token for the
              authentication and Authorisation of user accounts, Mongoose for
              Object Data Modeling, etc.
            </p>
            <p className="mt-4">
              The Frontend React application was deployed on Vercel, with the
              Backend Express API being deployed on Render.{" "}
              <strong className="italic">
                The free instance tier used for the backend will spin down after
                periods of inactivity, which can delay requests by 50 seconds or
                more.
              </strong>
            </p>
            <h3 className="mt-12 font-semibold text-2xl mb-2 drop-shadow-lg">
              Features:
            </h3>
            <div className="flex mt-4 mx-12 gap-12 justify-center">
              <ul className="list-disc">
                <li className="py-2">
                  <strong>5 Star product rating system.</strong>
                </li>
                <li className="py-2">
                  <strong>User Authentication</strong> - sign-up, login &
                  logout.
                </li>
                <li className="py-2">
                  <strong>Shopping Basket Management</strong> - Add and/or
                  remove products, change quantity & update total price.
                </li>
              </ul>
              <ul className="list-disc">
                <li className="py-2">
                  <strong>Admin User Authorization</strong> - CRUD
                  functionality.
                </li>
                <li className="py-2">
                  <strong>File Uploads</strong>
                </li>
                <li className="py-2">
                  <strong>
                    Organize and present products based on various criteria
                  </strong>{" "}
                  - e.g. Recently Added, High Rating, Book of the Month etc.
                </li>
              </ul>
            </div>
            <h3 className="mt-12 font-semibold text-2xl drop-shadow-lg">
              Technologies Used:
            </h3>
            <div className="flex mt-4 mx-12 gap-24">
              <ul className="list-disc">
                <li className="py-2">React Router DOM</li>
                <li className="py-2">React-router-hash-link</li>
                <li className="py-2">Tailwind CSS</li>
              </ul>
              <ul className="list-disc">
                <li className="py-2">React Icons</li>
                <li className="py-2">Fetch API</li>
                <li className="py-2">Context API</li>
              </ul>
              <ul className="list-disc">
                <li className="py-2">Mongoose</li>
                <li className="py-2">bcrypt</li>
                <li className="py-2">dotenv</li>
                <li className="py-2">multer</li>
              </ul>
              <ul className="list-disc">
                <li className="py-2">nodemon</li>
                <li className="py-2">cookie-parser</li>
                <li className="py-2">validator</li>
              </ul>
              <ul className="list-disc">
                <li className="py-2">dotenv</li>
                <li className="py-2">cors</li>
                <li className="py-2">jsonwebtoken</li>
              </ul>
              <ul className="list-disc">
                <li className="py-2">multer</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
