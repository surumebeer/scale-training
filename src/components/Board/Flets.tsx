import { css } from "@emotion/react";
import { fletsSounds, keyNames } from "../../constraints";
import { getFixedSoundNumber } from "../../utils/getFixedSoundNumber";
import { FletLine } from "./FletLine";

export const Flets = () => {
  const fletsArray = new Array(26).fill("");
  return (
    <>
      {fletsArray.map((_, i) => {
        return <FletLine positionNum={i} key={i} />;
      })}
    </>
  );
};
