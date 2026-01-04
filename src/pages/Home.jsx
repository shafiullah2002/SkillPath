import React from "react";
import Button from "../Components/Commons/Button";
import Card from "../Components/Commons/Card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    { title: "Interactive Roadmap", description: "Step-by-step learning tailored to your goals." },
    { title: "Progress Tracking", description: "Track your learning progress over time." },
    { title: "Daily Streaks", description: "Stay motivated with daily streaks and rewards." },
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">SkillPath</h1>
        <p className="text-gray-700 text-lg mb-6">
          Build your personalized learning roadmap and track your progress every day.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="primary" onClick={() => navigate("/assessment")}>
            Get Started
          </Button>
          <Button variant="outline" onClick={() => navigate("/dashboard")}>
            View Dashboard
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {features.map((feature, index) => (
          <Card key={index} title={feature.title}>
            <p className="text-gray-600">{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
