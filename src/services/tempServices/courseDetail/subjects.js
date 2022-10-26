const subject = {
  courseId: 0,
  title: "System Design",
  topics: [
    {
      topic: "Introduction",
      subtopics: [
        {
          subtopic: "let's start",
          content: [
            `hello this is first para.sj
              admasd
              asdkad
              asdkad`,
            "hello this is second para",
          ],
        },
        {
          subtopic: "let's continue",
          content: [
            "hello this is <b>first</b> para",
            "hello this is second para",
          ],
        },
      ],
    },
  ],
};

export const getSubject = () => {
  return subject;
};
