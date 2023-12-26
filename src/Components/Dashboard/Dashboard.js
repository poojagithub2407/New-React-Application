import React from "react";
import AdInsightChart from "./AdInsightChart,";
import AdInsight from "./AdInsight";
 import '../Shared/Table/table.css'
function Dashboard() {
  return (
    <div className="TableJoin">
      <div className="adInsight">
        <AdInsight />
      </div>
      <div className="adInsight" >
        <AdInsightChart />
      </div>
    </div>
  );
}

export default Dashboard;
