import React from "react";
import ReactDOM from "react-dom/client";
import DashboardComp from "./dashboard/DashboardComponent";
import "./dashboard";
import reportWebVitals from "./reportWebVitals";
import Wykresy from "./dashboard/Wykresy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <Dashboard />
    <DashboardComp />
    <script>
      <Wykresy />
    </script>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
