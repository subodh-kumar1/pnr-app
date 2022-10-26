import React from "react";

import { getSubject } from "../../../services/tempServices/courseDetail/subjects";
import Subject from "../../molecules/Subject";

const SubjectBody = () => {
  const subject = getSubject();

  return <Subject {...subject} />;
};

export default SubjectBody;
