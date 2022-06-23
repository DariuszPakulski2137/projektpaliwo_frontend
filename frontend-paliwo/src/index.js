import React from "react";
import ReactDOM from "react-dom/client";
import DashboardComp from "./dashboard/DashboardComponent";
import { DashboardClicks } from "./dashboard/dashboard";
import Wykresy from "./dashboard/Wykresy";
import Logowanie from "./Logowanie";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <DashboardComp />
    <DashboardClicks />
    <script>
      <Wykresy />
    </script>
  </div>
);
