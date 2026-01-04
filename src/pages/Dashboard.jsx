import React, { useContext, useEffect, useState } from "react";
import DashboardStats from "../Components/dashboard/DashboardStats";
import StreakCard from "../Components/dashboard/StreakCard";
import ProgressChart from "../Components/dashboard/ProgressChart";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {
  const { roadmap, streak } = useContext(AppContext);
  const [statsData, setStatsData] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const totalSteps = roadmap.length;
    const completedSteps = roadmap.filter((step) => step.completed).length;
    const totalProgress = totalSteps ? Math.round((completedSteps / totalSteps) * 100) : 0;

    setStatsData([
      { label: "Steps Completed", value: completedSteps },
      { label: "Total Progress", value: `${totalProgress}%` },
      { label: "Daily Streak", value: `${streak} Days` },
    ]);

    // Example chart: progress over the week
    setChartData([
      { day: "Mon", progress: 10 },
      { day: "Tue", progress: 25 },
      { day: "Wed", progress: 40 },
      { day: "Thu", progress: 55 },
      { day: "Fri", progress: 70 },
      { day: "Sat", progress: 85 },
      { day: "Sun", progress: 100 },
    ]);
  }, [roadmap, streak]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        Dashboard
      </h1>

      {/* Stats Section */}
      <DashboardStats stats={statsData} />

      {/* Streak Section */}
      <div className="mt-6">
        <StreakCard streak={streak} />
      </div>

      {/* Progress Chart Section */}
      <div className="mt-6">
        <ProgressChart data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;
