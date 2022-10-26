import React from "react";

import Footer from "../../components/molecules/Footer";
import MyAppBar from "../../components/molecules/MyAppBar";
import SubjectBody from "../../components/organisms/SubjectBody";
import SubjectTemplate from "../../components/templates/SubjectTemplate";

const SubjectPage = () => {
  return (
    <SubjectTemplate
      header={<MyAppBar />}
      body={<SubjectBody />}
      footer={<Footer />}
    />
  );
};
export default SubjectPage;
