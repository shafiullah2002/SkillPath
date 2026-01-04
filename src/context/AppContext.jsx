import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null); // {name, role, hours}
  const [roadmap, setRoadmap] = useState([]);
  const [streak, setStreak] = useState(0);

  // Save assessment and generate roadmap
  const saveAssessment = (data) => {
    setUser(data);

    // Example: generate roadmap dynamically
    let steps = [];
    if (data.role === "React Developer") {
      steps = [
        { title: "JS Refresher", description: "ES6+, array methods", completed: false },
        { title: "React Basics", description: "Components, props, state", completed: false },
        { title: "Hooks & State", description: "UseState, UseEffect", completed: false },
        { title: "Routing & Forms", description: "React Router & Forms", completed: false },
        { title: "Project Building", description: "Build real project", completed: false },
      ];
    } else {
      steps = [
        { title: "Intro to Programming", description: "Basics", completed: false },
        { title: "Foundational Skills", description: "Core concepts", completed: false },
      ];
    }

    setRoadmap(steps);
    setStreak(0);
  };

  // Mark a step as completed
  const completeStep = (index) => {
    const updated = [...roadmap];
    updated[index].completed = true;
    setRoadmap(updated);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        roadmap,
        streak,
        setUser,
        setRoadmap,
        setStreak,
        saveAssessment,
        completeStep,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
