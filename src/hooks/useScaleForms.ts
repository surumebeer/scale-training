import { scaleNames, keyNames, subScaleNames } from "../constraints";

import React from "react";

export const useScaleForms = () => {
  const [scale, useScale] = React.useState(scaleNames[0]);
  const [subScale, useSubScale] = React.useState(subScaleNames[scale.id][0]);
  const [keyName, useKeyName] = React.useState(keyNames[0]);
  const [sounds, useSounds] = React.useState(
    subScaleNames[scale.id][0].degrees
  );

  React.useEffect(() => {
    useSubScale(subScaleNames[scale.id][0]);
  }, [scale]);

  const soundsFixedByKeys = () => {
    const keyIndex = keyNames.findIndex((x) => x === keyName);
    const fixedDegrees = subScale.degrees.map((x) => {
      const fixedSounds = x + keyIndex;
      return fixedSounds > keyNames.length - 1
        ? fixedSounds - keyNames.length
        : fixedSounds;
    });
    useSounds(fixedDegrees);
  };

  React.useEffect(() => {
    soundsFixedByKeys();
  }, [scale, subScale, keyName]);

  const handleScaleFormChange = (type: string, value: string) => {
    switch (type) {
      case "scaleName":
        useScale(scaleNames.reduce((x, c) => (c.name === value ? c : x)));
        break;
      case "subScaleName":
        useSubScale(
          subScaleNames[scale.id].reduce((x, c) => (c.name === value ? c : x))
        );
        break;
      case "keyName":
        useKeyName(value);
        break;
      default:
        break;
    }
  };

  return { scale, subScale, keyName, sounds, handleScaleFormChange };
};
