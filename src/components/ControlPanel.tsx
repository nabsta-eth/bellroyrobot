import { useActiveSquareContextStore } from "../context/ActiveSquareContext";
import { SQUARES } from "../config/squares";
import Square from "./Square";
import { rotateRobot, moveRobot } from "../utils/robotMovement";
import { toTitleCase } from "../utils/format";

const LeftPanel = () => {
  const { activeSquare, activeSquareCoordinates } = useActiveSquareContextStore();
  const squareToShow = SQUARES[activeSquare];

  return (
    <aside className="flex fixed bottom-0 left-0 right-0 xl:right-auto xl:bottom-auto xl:h-screen xl:flex-col gap-4 justify-center xl:justify-start items-center h-100 px-4 py-4 xl:pt-28 bg-slate-100 drop-shadow-md shadow-slate-200 z-10 border-t-2">
      <div>
        <p className="text-sm">Click to rotate or move</p>
        <div className="flex justify-center items-center w-full mb-4 mx-auto ">
          <div className="grid grid-cols-3 gap-1 justify-center items-center">
            <Control icon="left" />
            <Control icon="right" />
            <Control icon="play" />
          </div>
        </div>
      </div>
      <div>
        <div className="text-sm text-slate-700 text-left w-full">
          {activeSquareCoordinates.row}/{activeSquareCoordinates.col}:
          <a
            href={squareToShow.url}
            target="_blank"
            rel="noreferrer"
            className="hover:text-bellroy-orange underline"
          >
            <span className="ml-1">
              {squareToShow.name === "Logo" ? "Bellroy" : squareToShow.name}
            </span>
            <span className="fa-sharp fa-thin fa-external-link-square ml-2"></span>
          </a>
        </div>
        <div className="flex justify-center items-center h-24 xl:h-48 xl:w-48 bg-slate-200">
          <Square square={squareToShow} />
        </div>
      </div>
    </aside>
  );
};

const Control = ({ icon }: { icon: "left" | "right" | "play" }) => {
  const { activeSquare, setActiveSquare, robotDirection, setRobotDirection } = useActiveSquareContextStore();
  const rotate = icon === "left" || icon === "right";

  const onClick = () => {
    if (icon === "play") {
      return moveRobot(robotDirection, activeSquare, setActiveSquare);
    }
    setRobotDirection(currentDirection => rotateRobot(currentDirection, icon === "left"));
  };

  return (
    <button
      className="control w-8 h-8 bg-slate-200 flex justify-center border-solid border rounded-sm border-slate-500 items-center shadow-sm shadow-slate-600"
      onClick={onClick}
      title={`${rotate ? "Rotate " : ""}${toTitleCase(icon)}`}
    >
      <span
        className={`fa-sharp fa-${
          rotate ? "rotate-" : ""
        }${icon} text-bellroy-orange`}
      />
    </button>
  );
};

export default LeftPanel;
