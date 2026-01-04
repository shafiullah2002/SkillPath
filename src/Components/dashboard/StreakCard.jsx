import React from "react";
import Card from "../Commons/Card";

const StreakCard = ({ streak }) => {
  return (
    <Card>
      <h2 className="text-3xl font-bold text-blue-600">{streak}</h2>
      <p className="text-gray-600">
        {streak === 1 ? "Day" : "Days"} Streak
      </p>
      {streak >= 7 && (
        <p className="text-green-500 mt-1 font-medium">
          🎉 Goal reached!
        </p>
      )}
    </Card>
  );
};

export default StreakCard;
