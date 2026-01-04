import React from "react";
import Card from "../Commons/Card";
import ProgressBar from "../Commons/ProgressBar";

const RoadmapStep = ({ stepNumber, title, description, completed }) => {
  return (
    <Card>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-md font-semibold">
          Step {stepNumber}: {title}
        </h3>
        <input
          type="checkbox"
          checked={completed}
          readOnly
          className="w-5 h-5 accent-blue-600"
        />
      </div>

      <p className="text-gray-600 mb-2">{description}</p>

      <ProgressBar value={completed ? 100 : 0} />
    </Card>
  );
};

export default RoadmapStep;
