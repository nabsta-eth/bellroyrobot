import Square from "./Square";
import { rowLength, SQUARES } from "../config/squares";
import { useActiveSquareContextStore } from "../context/ActiveSquareContext";

const Grid = () => {
  const { activeSquare, setActiveSquare } = useActiveSquareContextStore();
  const onClick = (ix: number) => setActiveSquare(ix);
  return (
    <div
      className={`grid grid-cols-${rowLength} grid-rows-${rowLength} xl:w-[800px] xl:h-[800px] max-h-fit max-w-fit gap-2 xl:gap-4`}
    >
      {SQUARES.map((square, index) => (
        <Square
          key={index}
          square={square}
          active={index === activeSquare}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

export default Grid;