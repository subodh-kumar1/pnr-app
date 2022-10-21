import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ActionButton from "../components/atoms/Button/ActionButton";
import PrimaryButton from "../components/atoms/Button/PrimaryButton";
import SecondaryButton from "../components/atoms/Button/SecondaryButton";
import MyAppBar from "../components/molecules/MyAppBar";
import themeLight from "../themes/light";

const App = () => {
  return (
    <ThemeProvider theme={themeLight}>
      <MyAppBar />
      <Container maxWidth="md">
        <Box>
          {" "}
          <PrimaryButton
            label="Primary Button"
            disabled={false}
            onClick={() => {
              /* no-ops*/
            }}
          />
          <SecondaryButton
            label="Secondary Button"
            disabled={false}
            onClick={() => {
              /* no-ops*/
            }}
          />
          <ActionButton
            label="Action Button"
            disabled={false}
            onClick={() => {
              /* no-ops*/
            }}
          />
          <Grid container spacing={2} rowSpacing={4}>
            <Grid item sm={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5">Heading</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5">Heading</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5">Heading</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5">Heading</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5">Heading</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5">Heading</Typography>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5">Heading</Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
