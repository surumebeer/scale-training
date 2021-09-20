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
