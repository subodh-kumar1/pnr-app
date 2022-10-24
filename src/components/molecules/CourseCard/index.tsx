import React from "react";
import { Card, CardContent, CardHeader, Tooltip, Typography } from "@mui/material";
import {makeStyles} from "@mui/styles";

export interface CourseInterface {
  courseId: number;
  title: string;
  noOfChapters: number;
  description: string;
}

const useStyles = makeStyles(() => ({
  root:{
    borderColor: '#278AB0',
    borderWidth: '2px',
    borderRadius: '4px'
  }
}))
const CourseCard = (props: CourseInterface) => {
  const style = useStyles();
  const { courseId, title, noOfChapters, description } = props;
  return (
    <Tooltip title={description}>
    <Card key={courseId} variant="outlined" className={style.root}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="subtitle1" color="CaptionText">
          {noOfChapters} Chapters
        </Typography>
        
      </CardContent>
    </Card>
    </Tooltip>
  );
};

export default CourseCard;
