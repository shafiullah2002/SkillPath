import React from "react";
import RoadmapStep from "./RoadmapStep";

const RoadmapList = ({ steps }) => {
  return (
    <div className="flex flex-col gap-4">
      {steps.map((step, index) => (
        <RoadmapStep
          key={index}
          stepNumber={index + 1}
          title={step.title}
          description={step.description}
          completed={step.completed}
        />
      ))}
    </div>
  );
};

export default RoadmapList;
