import { Container, Typography, Button } from "@mui/material";

import { Layout } from "../src/components/Layout";
import { ScaleForms } from "../src/components/ScaleForms";
import { Sounds } from "../src/components/Sounds";
import { useScaleStateContext, useScaleDispatchContext } from "../src/context";

import type { NextPage } from "next";
import { useRouter } from "next/router";

const Index: NextPage = () => {
  const { sounds } = useScaleStateContext();

  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/scale");
  };

  return (
    <Layout>
      <ScaleForms />
      <Sounds sounds={sounds} />
      <Button variant="contained" onClick={handleButtonClick}>
        try
      </Button>
    </Layout>
  );
};

export default Index;
