import { Typography } from "@mui/material";
import React from "react";

import Topic, { TopicInterface } from "../Topic";

interface SubjectInterface {
  courseId: number;
  title: string;
  topics: Array<TopicInterface>;
}

const Subject = (props: SubjectInterface) => {
  const { title, topics } = props;
  return (
    <React.Fragment>
      <Typography variant="h4">{title}</Typography>
      {topics.map((topic, index) => (
        <Topic {...topic} key={index} />
      ))}
    </React.Fragment>
  );
};

export default Subject;
