import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

export interface SubtopicInterface {
  subtopic: string;
  content: Array<string>;
}

const useStyles = makeStyles(() => ({
  card: {
    backgroundColor: "white !important",
    borderRadius: "0 !important",
    border: "0 !important",
  },
}));

const Subtopic = (props: SubtopicInterface) => {
  const { subtopic, content } = props;

  const style = useStyles();
  return (
    <React.Fragment>
      <Card className={style.card}>
        <CardHeader title={subtopic} />
        <CardContent>
          {content.map((para, index) => {
            return (
              <Typography
                dangerouslySetInnerHTML={{ __html: para }}
                key={index}
                variant="body1"
              />
            );
          })}
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default Subtopic;
