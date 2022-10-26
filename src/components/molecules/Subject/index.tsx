import React from "react";
import { Box, Typography } from "@mui/material";

import Topic, { TopicInterface } from "../Topic";

interface SubjectInterface {
  courseId: number;
  title: string;
  topics: Array<TopicInterface>;
  description: string;
}

const Subject = (props: SubjectInterface) => {
  const { title, topics, description, courseId } = props;
  return (
    <React.Fragment>
      <Typography variant="h4">
        #{courseId}.{title}
      </Typography>
      <Box padding={2}>
        <Typography variant="subtitle2" color="GrayText">
          ({description})
        </Typography>
      </Box>

      <Box padding={4}>
        {topics.map((topic, index) => (
          <Topic {...topic} key={index} />
        ))}
      </Box>
    </React.Fragment>
  );
};

export default Subject;
