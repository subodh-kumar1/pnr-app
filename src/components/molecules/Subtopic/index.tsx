import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export interface SubtopicInterface {
  subtopic: string;
  content: Array<string>;
}

const Subtopic = (props: SubtopicInterface) => {
  const { subtopic, content } = props;

  return (
    <React.Fragment>
      <Card>
        <CardHeader title={subtopic} />
        <CardContent>
          {content.map((para, index) => {
            return (
              <Typography key={index} variant="body1">
                {para}
              </Typography>
            );
          })}
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default Subtopic;
