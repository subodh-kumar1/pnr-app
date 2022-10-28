import React from "react";
import { Card, CardHeader, Link, Tooltip } from "@mui/material";

export interface CourseInterface {
  courseId: number;
  title: string;
  noOfChapters: number;
  description: string;
}

const CourseCard = (props: CourseInterface) => {
  const { courseId, title, noOfChapters, description } = props;
  return (
    <Tooltip title={description}>
      <Link href="/subject" underline="none">
        <Card key={courseId} variant="outlined">
          <CardHeader title={title} subheader={`${noOfChapters} Chapters`} />
        </Card>
      </Link>
    </Tooltip>
  );
};

export default CourseCard;
