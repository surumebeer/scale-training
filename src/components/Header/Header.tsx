import { Toolbar, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Toolbar>
      <Typography
        variant="h4"
        component="div"
        sx={{ flexGrow: 1 }}
        align="center"
      >
        <a href="/">Scale Training</a>
      </Typography>
    </Toolbar>
  );
};
