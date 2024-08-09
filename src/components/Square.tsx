import classNames from "classnames";
import { SquareType } from "../config/squares";
import { ROBOT } from "../config";
import { useActiveSquareContextStore } from "../context/ActiveSquareContext";
import { getRobotRotationDegrees } from "../utils/robotMovement";

const Square = ({square, active, onClick}: {square: SquareType; active?: boolean; onClick?: () => void;}) => {
  const { robotDirection } = useActiveSquareContextStore();
  const imgToShow = active ? ROBOT : square;
  const robotDirectionDegrees = getRobotRotationDegrees(robotDirection);
  const nameToShow = imgToShow.name === "Logo" ? "Bellroy" : imgToShow.name;
  return (
    <button
      className={classNames(
        "w-full h-full bg-slate-200 flex justify-center items-center text-slate-700 shadow-slate-600 hover:shadow-xl",
        {
          "shadow-lg": active,
        }
      )}
      disabled={active}
      onClick={
        onClick
          ? onClick
          : () =>
              !active &&
              window.open(square.url, "_blank", "noopener,noreferrer")
      }
      title={active ? undefined : nameToShow}
    >
      <img
        src={imgToShow.img}
        className="object-contain aspect-square w-full h-full"
        style={
          !active || robotDirectionDegrees === 0
            ? undefined
            : { transform: `rotate(${robotDirectionDegrees}deg)` }
        }
        alt={nameToShow}
      />
    </button>
  );
};

export default Square;
