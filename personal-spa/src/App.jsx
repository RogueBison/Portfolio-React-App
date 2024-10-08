/* eslint-disable react/prop-types */
import "./index.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project0 from "./pages/project-0";
import Project2 from "./pages/project-2";
import Project3 from "./pages/project-3";
import MainContent from "./components/mainContent";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <>
      <div className="page-container bg-slate-900 text-neutral-50 min-h-screen text-lg bg-[url('/always-grey.png')] bg-center bg-fixed">
        <BrowserRouter>
          <Navbar />
          <ScrollToTop>
            <div className="container mx-auto">
              <Routes>
                <Route index element={<MainContent />} />
                <Route path="/" element={<mainContent />} />
                <Route path="/the-online-bookstore" element={<Project0 />} />
                <Route path="/laravel" element={<Project2 />} />
                <Route path="/asp.net-core6-mvc" element={<Project3 />} />
              </Routes>
            </div>
          </ScrollToTop>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
