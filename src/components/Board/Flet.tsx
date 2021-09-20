import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useScaleStateContext } from "../../context/";
import { keyNames } from "../../constraints";

type Props = {
  soundNum: number;
  positionNum: number;
};

const fletCss = (positionNum: number) => css`
  width: 50px;
  height: 30px;
  text-align: center;
  position: relative;
  border-right: 1px solid #aaa;
  border-left: ${positionNum === 0 ? 4 : 2}px solid
    ${positionNum === 0 ? "#333" : "#aaa"};
  &:after {
    content: "";
    z-index: -1;
    position: absolute;
    top: 50%;
    height: 1px;
    width: 100%;
    background: #ccc;
    left: 0;
  }
`;

const fletButton = css`
  width: 50px;
  height: 30px;
  text-align: center;
  background: none;
  border: none;
  cursor: pointer;
`;

const fletStatus = (status: boolean) => css`
  ${status
    ? `font-weight: bold`
    : `
  color: red;
  opacity: 0.5;`}
`;

export const Flet = ({ soundNum, positionNum }: Props) => {
  const [isCorrect, useIsCorrect] = useState(true);
  const [toggleButton, useToggleButton] = useState(false);

  const { sounds } = useScaleStateContext();

  const handleButton = () => {
    useToggleButton(true);
  };

  const isSoundInScales = () => {
    return sounds.includes(soundNum);
  };

  useEffect(() => {
    useIsCorrect(isSoundInScales());
  }, [sounds]);

  return (
    <div css={fletCss(positionNum)}>
      <button css={[fletButton, fletStatus(isCorrect)]} onClick={handleButton}>
        {toggleButton ? keyNames[soundNum] : ""}
      </button>
    </div>
  );
};
