import { Grid } from "@mui/material";
import { Flets } from "./Flets";
import { css } from "@emotion/react";

export const Board = () => {
  return (
    <Grid container direction="row">
      <Flets />
    </Grid>
  );
};
