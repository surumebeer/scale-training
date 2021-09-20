import { keyNames, scaleNames, subScaleNames } from "../constraints";
import { State } from "./reducers";

export const initialScaleValue: State = {
  scale: scaleNames[0],
  subScale: subScaleNames[0][0],
  keyName: keyNames[0],
  sounds: subScaleNames[0][0].degrees,
};
