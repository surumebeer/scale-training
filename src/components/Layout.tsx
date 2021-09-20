import { Container } from "@mui/material";
import { Header } from "./Header";
import { ScaleContextProvider } from "../context";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Layout = ({ children }: Props) => {
  return (
    <Container maxWidth="sm">
      <ScaleContextProvider>
        <Header />
        <Container maxWidth="sm">{children}</Container>
      </ScaleContextProvider>
    </Container>
  );
};
