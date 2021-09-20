import { SubScaleName, KeyName, keyNames } from "../constraints";
import { getFixedSoundNumber } from "./getFixedSoundNumber";

export const getFixedDegrees = (subScale: SubScaleName, keyName: KeyName) => {
  const keyIndex = keyNames.findIndex((x) => x === keyName);
  return subScale.degrees.map((x) => {
    return getFixedSoundNumber(x, keyIndex);
  });
};
