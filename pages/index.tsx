import { Button, Box } from "@mui/material";
import { Layout } from "../src/components/Layout";
import { ScaleForms } from "../src/components/ScaleForms/ScaleForms";
import { Sounds } from "../src/components/Sounds";

import type { NextPage } from "next";
import { useRouter } from "next/router";

const Index: NextPage = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/scale");
  };

  return (
    <Layout>
      <ScaleForms />
      <Sounds />
      <Box sx={{ textAlign: "center" }}>
        <Button variant="contained" onClick={handleButtonClick}>
          try
        </Button>
      </Box>
    </Layout>
  );
};

export default Index;
