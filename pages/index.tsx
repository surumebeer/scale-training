import {
  Box,
  Container,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Paper,
} from "@mui/material";

import { ScaleForms } from "../src/components/ScaleForms";
import { useScaleForms } from "../src/hooks/useScaleForms";

import { scaleNames, keyNames, subScaleNames } from "../src/constraints";

import type { NextPage } from "next";
import React from "react";

const Index: NextPage = () => {
  const { scale, subScale, keyName, sounds, handleScaleFormChange } =
    useScaleForms();

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1">
        Scale Training
      </Typography>
      <ScaleForms
        scale={scale}
        subScale={subScale}
        keyName={keyName}
        onFormChange={handleScaleFormChange}
      />
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          {sounds.map((x) => (
            <Grid key={x} item justifyContent="center" alignItems="center">
              <p>{keyNames[x]}</p>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Button variant="contained">try</Button>
    </Container>
  );
};

export default Index;
