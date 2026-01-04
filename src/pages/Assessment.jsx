import React, { useState, useContext } from "react";
import Input from "../Components/Commons/Input";
import Button from "../Components/Commons/Button";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Assessment = () => {
  const navigate = useNavigate();
  const { saveAssessment } = useContext(AppContext);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [hours, setHours] = useState("");
  const [errors, setErrors] = useState({});

  const roles = [
    "Frontend Developer",
    "React Developer",
    "AI / ML Engineer",
    "Game Developer",
    "Backend Developer",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!role) newErrors.role = "Role is required";
    if (!hours) newErrors.hours = "Daily hours required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      saveAssessment({ name, role, hours }); // Save in Context
      navigate("/roadmap");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        Assessment
      </h1>

      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <Input
          label="Your Name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />

        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700">Select Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className={`mt-1 px-4 py-2 border rounded-lg w-full outline-none ${
              errors.role ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">-- Select Role --</option>
            {roles.map((r, index) => (
              <option key={index} value={r}>
                {r}
              </option>
            ))}
          </select>
          {errors.role && <span className="text-xs text-red-500">{errors.role}</span>}
        </div>

        <Input
          label="Daily Study Hours"
          type="number"
          placeholder="Enter hours per day"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          error={errors.hours}
        />

        <Button type="submit" variant="primary" className="mt-4 w-full">
          Generate Roadmap
        </Button>
      </form>
    </div>
  );
};

export default Assessment;
