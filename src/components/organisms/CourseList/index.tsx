import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { getCourses } from "../../../services/tempServices/courseData/courses";
import CourseCard, { CourseInterface } from "../../molecules/CourseCard";

const CourseList = () => {
  const [courseList, setCourseList] = useState<Array<CourseInterface>>([]);
  useEffect(() => {
    const courseList = getCourses();
    setCourseList(courseList);
  }, []);

  return (
    <Grid container spacing={4}>
      {courseList.map((course) => {
        const { courseId, description, noOfChapters, title } = course;
        return (
          <Grid item sm={4} key={courseId}>
            <CourseCard
              courseId={courseId}
              description={description}
              noOfChapters={noOfChapters}
              title={title}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CourseList;
