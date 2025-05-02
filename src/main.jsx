import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";

const StatePage = ({ name }) => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Details for {name}</h2>
      <p>This is a placeholder page for {name}.</p>
    </div>
  );
};

const StateRoute = () => {
  const { pathname } = window.location;
  const stateName = pathname.split("/states/")[1]?.replace(/-/g, " ");
  return <StatePage name={stateName} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/states/:name" element={<StateRoute />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);