import { Box, Container } from "@mui/material";
import { scaleNames, subScaleNames, keyNames } from "../../constraints";
import { ScaleName, SubScaleName } from "../../constraints/types";
import { useScaleStateContext } from "../../context";
import { SelectForm } from "./SelectForm";

export const ScaleForms = () => {
  const { scale, subScale, keyName } = useScaleStateContext();

  return (
    <Container>
      <Box>
        <SelectForm
          id="scale-name"
          labelName="Scale Name"
          actionType="CHANGE_SCALE_NAME"
          selectedValue={scale.name}
          itemValues={scaleNames}
        />
      </Box>
      <Box>
        <SelectForm
          id="sub-scale-name"
          labelName="Sub Scale Name"
          actionType="CHANGE_SUB_SCALE_NAME"
          selectedValue={subScale.name}
          itemValues={subScaleNames[scale.id]}
        />
      </Box>
      <Box>
        <SelectForm
          id="key-name"
          labelName="Key Name"
          actionType="CHANGE_KEY_NAME"
          selectedValue={keyName}
          itemValues={keyNames}
        />
      </Box>
    </Container>
  );
};
