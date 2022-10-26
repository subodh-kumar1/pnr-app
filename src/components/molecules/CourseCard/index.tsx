import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Link,
  Tooltip,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

export interface CourseInterface {
  courseId: number;
  title: string;
  noOfChapters: number;
  description: string;
}

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#278AB0",
    color: "ButtonFace",
    borderWidth: "2px",
    borderRadius: "4px",
  },
}));
const CourseCard = (props: CourseInterface) => {
  const style = useStyles();
  const { courseId, title, noOfChapters, description } = props;
  return (
    <Tooltip title={description}>
      <Link href="/subject" underline="none">
        <Card key={courseId} variant="outlined" className={style.root}>
          <CardHeader title={title} />
          <CardContent>
            <Typography variant="subtitle1" color="ActiveBorder">
              {noOfChapters} Chapters
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Tooltip>
  );
};

export default CourseCard;
