import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { ScaleNames, SubScaleNames, KeyNames } from "../../constraints";
import { useScaleDispatchContext } from "../../context";
import { ActionType } from "../../context/reducers";

type Props = {
  id: string;
  labelName: string;
  actionType: ActionType;
  selectedValue: string;
  itemValues: ScaleNames | SubScaleNames | KeyNames;
};

export const SelectForm = ({
  id,
  labelName,
  actionType,
  selectedValue,
  itemValues,
}: Props) => {
  const dispatch = useScaleDispatchContext();

  return (
    <FormControl fullWidth>
      <InputLabel variant="standard" htmlFor={id}>
        Scale Name
      </InputLabel>
      <Select
        labelId={id}
        id={id}
        label={labelName}
        value={selectedValue}
        onChange={(e) =>
          dispatch({ type: actionType, payload: { value: e.target.value } })
        }
      >
        {actionType !== "CHANGE_KEY_NAME"
          ? itemValues.map((x) => (
              <MenuItem value={x.name} key={x.id}>
                {x.name}
              </MenuItem>
            ))
          : itemValues.map((x) => (
              <MenuItem value={x} key={x}>
                {x}
              </MenuItem>
            ))}
      </Select>
    </FormControl>
  );
};
