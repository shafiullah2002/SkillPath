import React, { useContext } from "react";
import RoadmapList from "../Components/roadmap/RoadmapList";
import { AppContext } from "../context/AppContext";

const Roadmap = () => {
  const { roadmap, completeStep } = useContext(AppContext);

  const handleCompleteStep = (index) => {
    completeStep(index);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        Your Personalized Roadmap
      </h1>

      {roadmap.length > 0 ? (
        <RoadmapList
          steps={roadmap.map((step, index) => ({
            ...step,
            onComplete: () => handleCompleteStep(index),
          }))}
        />
      ) : (
        <p className="text-gray-600 text-center">
          No roadmap available. Please complete the assessment first.
        </p>
      )}
    </div>
  );
};

export default Roadmap;
