const courses = [
  {
    courseId: 0,
    title: "DSA",
    noOfChapters: 20,
    description:
      "The Most important topic for getting into product based companies.",
  },
  {
    courseId: 1,
    title: "Java",
    noOfChapters: 10,
    description: "Widely used language for software companies.",
  },
  {
    courseId: 2,
    title: "C++",
    noOfChapters: 15,
    description: "Most popular language in academics.",
  },
  {
    courseId: 3,
    title: "System Design",
    noOfChapters: 20,
    description: "Very useful for Senior Software Engineers.",
  },
];

export const getCourses = () => {
  return courses;
};

export const getCourse = (id) => {
  return courses.find((course) => course.courseId === id);
};
