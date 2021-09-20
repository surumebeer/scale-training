import { Box, Grid } from "@mui/material";
import { useScaleStateContext } from "../../context";
import { keyNames } from "../../constraints";

export const Sounds = () => {
  const { sounds } = useScaleStateContext();

  return (
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
  );
};
