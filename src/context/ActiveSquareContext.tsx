import * as React from "react";
import { SQUARES } from "../config/squares";
import { getSquareCoordinates, SquareCoordinates } from "../utils/getSquareCoordinates";

export type RobotDirection = "up" | "down" | "left" | "right";
export type ActiveSquare = {
  activeSquare: number;
  setActiveSquare: React.Dispatch<React.SetStateAction<number>>;
  activeSquareCoordinates: SquareCoordinates;
  robotDirection: RobotDirection;
  setRobotDirection: React.Dispatch<React.SetStateAction<RobotDirection>>;
};

export const ActiveSquareContext = React.createContext<ActiveSquare | undefined>(
  undefined
);

export const ActiveSquareContextProvider: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  const [activeSquare, setActiveSquare] = React.useState<number>(SQUARES.length % 2);
  const activeSquareCoordinates = React.useMemo(() => getSquareCoordinates(activeSquare), [activeSquare]);
  const [robotDirection, setRobotDirection] = React.useState<RobotDirection>("down");
  const value = React.useMemo(
    () => ({
      activeSquare,
      setActiveSquare,
      activeSquareCoordinates,
      robotDirection,
      setRobotDirection,
    }),
    [activeSquare, activeSquareCoordinates, robotDirection]
  );

  return (
    <ActiveSquareContext.Provider value={value}>
      {props.children}
    </ActiveSquareContext.Provider>
  );
};

export const useActiveSquareContextStore = () => {
  const context = React.useContext(ActiveSquareContext);

  if (context === undefined) {
    throw new Error("useActiveSquareContextStore must be used within a ActiveSquareContextProvider");
  }
  return context;
};
