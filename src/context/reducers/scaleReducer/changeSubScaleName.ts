import { subScaleNames } from "../../../constraints";
import { HandleReducer } from "..";
import { getFixedDegrees } from "../../../utils/getFixedDegrees";

export const changeSubScaleName = ({ state, payload }: HandleReducer) => {
  const currentSubScale = subScaleNames[state.scale.id].reduce((x, c) =>
    c.name === payload.value ? c : x
  );
  return {
    ...state,
    subScale: currentSubScale,
    sounds: getFixedDegrees(currentSubScale, state.keyName),
  };
};
