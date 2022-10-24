import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../../components/molecules/Footer";
import MyAppBar from "../../components/molecules/MyAppBar";
import AboutPage from "../../pages/AboutPage";
import CoursesPage from "../../pages/CoursesPage";

const RouteHandler = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoursesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
};

const Error = () => {
  return (
    <div>
      <MyAppBar />
      404 Error Page not Found
      <Footer />
    </div>
  );
};

export default RouteHandler;
