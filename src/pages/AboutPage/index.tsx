import React from "react";
import AboutBody from "../../components/molecules/AboutBody";
import Footer from "../../components/molecules/Footer";
import MyAppBar from "../../components/molecules/MyAppBar";
import CoursesTemplate from "../../components/templates/CoursesTemplate";

const AboutPage = () => {
  return (
    <CoursesTemplate
      header={<MyAppBar />}
      body={<AboutBody />}
      footer={<Footer />}
    />
  );
};
export default AboutPage;
