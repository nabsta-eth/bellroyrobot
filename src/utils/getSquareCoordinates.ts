import { rowLength } from "../config/squares";

export type SquareCoordinates = {
  row: number;
  col: number;
};

export const getSquareCoordinates = (activeSquare: number): SquareCoordinates => {
  return {
    row: ~~(activeSquare / rowLength) + 1,
    col: activeSquare + 1 - ~~(activeSquare / rowLength) * rowLength,
  };
};
