import React from "react";
import Card from "../Commons/Card";

const DashboardStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <h2 className="text-2xl font-bold text-gray-800">
            {stat.value}
          </h2>
          <p className="text-gray-500">{stat.label}</p>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
