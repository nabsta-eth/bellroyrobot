import { SetStateAction } from "react";
import { RobotDirection } from "../context/ActiveSquareContext";
import { rowLength } from "../config/squares";

export const rotateRobot = (direction: RobotDirection, isLeft: boolean): RobotDirection => {
  switch (direction) {
    case "up":
      return isLeft ? "left" : "right";
    case "down":
      return isLeft ? "right" : "left";
    case "left":
      return isLeft ? "down" : "up";
    case "right":
      return isLeft ? "up" : "down";
  }
};

export const getRobotRotationDegrees = (direction: RobotDirection): number => {
  switch (direction) {
    case "up":
      return 180;
    case "down":
      return 0;
    case "left":
      return 90;
    case "right":
      return -90;
  }
};

export const moveRobot = (direction: RobotDirection, activeSquare: number, setActiveSquare: React.Dispatch<SetStateAction<number>>) => {
  const isAtEdge = (direction === "up" && activeSquare < rowLength) || (direction === "down" && activeSquare > 19) || (direction === "left" && activeSquare % rowLength === 0) || (direction === "right" && activeSquare % rowLength === 4);
  if (isAtEdge) {
    return;
  }
  switch (direction) {
    case "up":
      return setActiveSquare(activeSquare - rowLength);
    case "down":
      return setActiveSquare(activeSquare + rowLength);
    case "left":
      return setActiveSquare(activeSquare - 1);
    default:
      setActiveSquare(activeSquare + 1);
  }
};
