import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export interface CourseInterface {
  courseId: number;
  title: string;
  noOfChapters: number;
  description: string;
}
const CourseCard = (props: CourseInterface) => {
  const { courseId, title, noOfChapters, description } = props;
  return (
    <Card key={courseId} variant="outlined">
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="subtitle1" color="CaptionText">
          {noOfChapters} Chapters
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
