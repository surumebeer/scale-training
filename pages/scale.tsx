import { NextPage } from "next";
import { Board } from "../src/components/Board";
import { Layout } from "../src/components/Layout";
import { ScaleForms } from "../src/components/ScaleForms/ScaleForms";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Scale: NextPage = () => {
  return (
    <Layout>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>設定</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ScaleForms />
        </AccordionDetails>
      </Accordion>
      <Board />
    </Layout>
  );
};

export default Scale;
