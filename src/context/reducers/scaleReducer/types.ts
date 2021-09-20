import { ScaleName, SubScaleName, KeyName, Sounds } from "../../../constraints";

export type State = {
  scale: ScaleName;
  subScale: SubScaleName;
  keyName: KeyName;
  sounds: Sounds;
};

export type ActionType =
  | "CHANGE_SCALE_NAME"
  | "CHANGE_SUB_SCALE_NAME"
  | "CHANGE_KEY_NAME";

export type Payload = {
  value: string;
};

export type Action = {
  payload: Payload;
  type: ActionType;
};

export type ScaleReducer = {
  state: State;
  action: Action;
};

export type HandleReducer = {
  state: State;
  payload: Payload;
};
