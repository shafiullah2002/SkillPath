import React from "react";

const ProgressBar = ({ value = 0 }) => {
  return (
    <div className="w-full">
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-3 bg-blue-600 rounded-full transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>

      <p className="text-sm text-gray-600 mt-1">
        {value}% completed
      </p>
    </div>
  );
};

export default ProgressBar;
