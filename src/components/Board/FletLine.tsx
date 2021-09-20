import { css } from "@emotion/react";
import { getFixedSoundNumber } from "../../utils/getFixedSoundNumber";
import { fletsSounds, keyNames } from "../../constraints";
import { Flet } from "./Flet";

type Props = {
  positionNum: number;
};

const feltsLineWrap = css`
  margin-bottom: 10px;
`;

const positionCss = css`
  text-align: center;
`;

export const FletLine = ({ positionNum }: Props) => {
  const zeroFletIndex = () =>
    fletsSounds.map((x) => keyNames.findIndex((e) => e === x));
  return (
    <div key={positionNum} css={feltsLineWrap}>
      <div css={positionCss}>{positionNum}</div>
      {zeroFletIndex().map((x, i) => {
        const num: number = getFixedSoundNumber(x, positionNum);
        return (
          <Flet
            soundNum={num}
            positionNum={positionNum}
            key={`${positionNum}-${i}-${keyNames[num]}`}
          />
        );
      })}
    </div>
  );
};
