import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
} from "@mui/material";
import { scaleNames, subScaleNames, keyNames } from "../constraints";
import { ScaleName, SubScaleName } from "../constraints/types";

type Props = {
  scale: ScaleName;
  subScale: SubScaleName;
  keyName: string;
  onFormChange: (arg1: string, arg2: string) => void;
};

export const ScaleForms = ({
  scale,
  subScale,
  keyName,
  onFormChange,
}: Props) => {
  return (
    <Container>
      <Box>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="scale-name">
            Scale Name
          </InputLabel>
          <Select
            labelId="scale-name"
            id="scale-name"
            label="Scale Name"
            value={scale.name}
            onChange={(e) => onFormChange("scaleName", e.target.value)}
          >
            {scaleNames.map((x) => (
              <MenuItem value={x.name} key={x.id}>
                {x.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="sub-scale-name">
            Scale Name
          </InputLabel>
          <Select
            labelId="sub-scale-name"
            id="sub-scale-name"
            label="Sub Scale Name"
            value={subScale.name}
            onChange={(e) => onFormChange("subScaleName", e.target.value)}
          >
            {subScaleNames[scale.id].map((x) => (
              <MenuItem value={x.name} key={x.id}>
                {x.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="key">
            key
          </InputLabel>
          <Select
            labelId="key"
            id="key"
            label="key"
            value={keyName}
            onChange={(e) => onFormChange("keyName", e.target.value)}
          >
            {keyNames.map((x) => (
              <MenuItem value={x} key={x}>
                {x}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Container>
  );
};
