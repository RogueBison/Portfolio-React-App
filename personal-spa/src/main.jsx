import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// eslint-disable-next-line
const PROJECTINFO = [
  {
    id: "project-0",
    path: "/reporting_app.png",
    name: "Invasive Species Reporting React PWA",
    url: "https://dwt-cw1.vercel.app/",
    location: "View Live App",
    description:
      "An assessment project that required me to develop a frontend progressive web application with ReactJS that utilized a minimum of two mobile device hardware APIs, which for this app was Geolocation and Webcam. The idea behind this app is to allow the user to report sightings of possible invasive species.",
  },
  {
    id: "project-1",
    path: "/reshapehr.png",
    name: "Reshape HR",
    url: "https://reshapehr.com/",
    location: "View Live Website",
    description:
      "Complete design overhaul of the HR with EA WordPress.org website to coincide with the rebranding of the company to 'Reshape HR Limited'. Please view the 'Experience' section on my LinkedIn page for more details.",
  },
  /* {
    id: "project-2",
    path: "/laravelapp.png",
    name: "Full Stack Laravel App",
    location: "View Github Repo",
    url: "https://github.com/RogueBison/Laravel-app",
    description:
      "An assessment project required me to develop a full-stack web app using the Laravel PHP framework.",
  }, */
  {
    id: "project-2",
    path: "/reactportfolio.png",
    name: "Frontend React Portfolio App",
    location: "View Github Repo",
    url: "https://github.com/RogueBison/Portfolio-React-App",
    description:
      "Frontend Portfolio app designed with Figma, then built using the ReactJS UI library and Tailwind CSS. 'EmailJS' and the 'react-hook-form' library were used to implement the 'Contact Form' component. I used this project as an opportunity to learn a CSS Framework, as I heard of it them before but never used any, only ever using vanilla CSS.",
  },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App projects={PROJECTINFO} />
  </StrictMode>
);
