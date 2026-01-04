import React from "react";

const Card = ({ title, children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl shadow-md p-5 transition duration-300
        ${onClick ? "cursor-pointer hover:shadow-lg" : ""}
      `}
    >
      {title && (
        <h3 className="text-lg font-semibold mb-3 text-gray-800">
          {title}
        </h3>
      )}

      {children}
    </div>
  );
};

export default Card;
