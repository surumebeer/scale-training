import { HandleReducer } from "..";
import { getFixedDegrees } from "../../../utils/getFixedDegrees";

export const changeKeyName = ({ state, payload }: HandleReducer) => {
  return {
    ...state,
    keyName: payload.value,
    sounds: getFixedDegrees(state.subScale, payload.value),
  };
};
