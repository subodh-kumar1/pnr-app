import React from "react";
import { Container, Grid } from "@mui/material";

interface CoursesTemplateInterface {
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}
const CoursesTemplate = (props: CoursesTemplateInterface) => {
  const { header, body, footer } = props;
  return (
    <Grid container rowSpacing={1}>
      <Grid item sm={12}>
        {header}
      </Grid>
      <Grid item sm={12}>
        <Container maxWidth="md">{body}</Container>
      </Grid>
      <Grid item sm={12}>
        {footer}
      </Grid>
    </Grid>
  );
};

export default CoursesTemplate;
