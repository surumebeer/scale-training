import { State, Action } from "../.";
import { changeScaleName, changeSubScaleName, changeKeyName } from ".";

export const scaleReducer: React.Reducer<State, Action> = (
  state,
  { payload, type }
): State => {
  switch (type) {
    case "CHANGE_SCALE_NAME":
      return changeScaleName({ state, payload });
    case "CHANGE_SUB_SCALE_NAME":
      return changeSubScaleName({ state, payload });
    case "CHANGE_KEY_NAME":
      return changeKeyName({ state, payload });
    default:
      return state;
  }
};
