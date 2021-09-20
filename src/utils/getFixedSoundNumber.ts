import { keyNames } from "../constraints";

export const getFixedSoundNumber = (
  currentNumber: number,
  addNumber: number
) => {
  const fixedSounds: number = fixSoundsNumber(currentNumber + addNumber);
  return fixedSounds;
};

const fixSoundsNumber = (soundsNumber: number): any => {
  if (soundsNumber > keyNames.length - 1) {
    return fixSoundsNumber(soundsNumber - keyNames.length);
  } else {
    return soundsNumber;
  }
};
