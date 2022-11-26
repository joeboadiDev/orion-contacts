import React from "react";
import { useNavigate } from "react-router";

const GoBack = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/")}>Back</button>;
};

export default GoBack;
