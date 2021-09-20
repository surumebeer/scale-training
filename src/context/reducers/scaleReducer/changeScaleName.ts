import { scaleNames, subScaleNames } from "../../../constraints";
import { HandleReducer } from "..";
import { getFixedDegrees } from "../../../utils/getFixedDegrees";

export const changeScaleName = ({ state, payload }: HandleReducer) => {
  const currentScale = scaleNames.reduce((x, c) => {
    return c.name === payload.value ? c : x;
  });
  const currentSubScale = subScaleNames[currentScale.id].reduce((x, c) =>
    c.name === payload.value ? c : x
  );
  return {
    ...state,
    scale: currentScale,
    subScale: currentSubScale,
    sounds: getFixedDegrees(currentSubScale, state.keyName),
  };
};
