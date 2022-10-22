import React from "react";
import Footer from "../../components/molecules/Footer";
import MyAppBar from "../../components/molecules/MyAppBar";
import CourseList from "../../components/organisms/CourseList";
import CoursesTemplate from "../../components/templates/CoursesTemplate";

const CoursesPage = () => {
  return (
    <CoursesTemplate
      header={<MyAppBar />}
      body={<CourseList />}
      footer={<Footer />}
    />
  );
};
export default CoursesPage;
