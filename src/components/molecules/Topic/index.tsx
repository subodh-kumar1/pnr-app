import React from "react";
import { ExpandCircleDown } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

import Subtopic, { SubtopicInterface } from "../Subtopic";

export interface TopicInterface {
  topic: string;
  subtopics: Array<SubtopicInterface>;
}

const Topic = (props: TopicInterface) => {
  const { topic, subtopics } = props;

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandCircleDown />}>
        <Typography>{topic}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {subtopics.map((subtopic, index) => {
          return <Subtopic {...subtopic} key={index} />;
        })}
      </AccordionDetails>
    </Accordion>
  );
};

export default Topic;
