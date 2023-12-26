import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import "./dashboard.css"; // Ensure the path is correct
import tableData2 from "../../tableData2.json";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import MenuItem from "@mui/material/MenuItem";

ChartJS.register(ArcElement, Tooltip, Legend);

const columns = [
  { label: "Clicks", accessor: "clicks", sortable: true },
  { label: "Cost", accessor: "cost", sortable: true },
  { label: "Convensions", accessor: "convensions", sortable: true },
  { label: "Renvenue", accessor: "renvenue", sortable: true },
];

const AdInsightTable = () => {
  const [selectedMetric, setSelectedMetric] = useState(columns[0]);
  const [data, setData] = useState([]);
  const [percentageData, setPercentageData] = useState([]);

  useEffect(() => {
    if (tableData2 && tableData2.length > 0) {
      const metricValues = tableData2.map((item) =>
        parseFloat(item[selectedMetric.accessor])
      );
      const total = metricValues.reduce((acc, value) => acc + value, 0);

      const calculatedPercentageData = tableData2.map((item) => ({
        label: item.group,
        value: (parseFloat(item[selectedMetric.accessor]) / total) * 100,
      }));

      setPercentageData(calculatedPercentageData);
      setData(calculatedPercentageData);
    }
  }, [selectedMetric]);

  const handleChange = (event) => {
    const selectedAccessor = event.target.value;
    const selectedCol = columns.find(
      (col) => col.accessor === selectedAccessor
    );
    setSelectedMetric(selectedCol);
  };

  const doughnutParams = {
    options: {
      cutout: "60%",
    },
    width: 200,
    height: 200,
  };

  const cellStyle2 = {
    fontWeight: "bold",
    paddingLeft: "300px",
    paddingTop: "60px",
  };
  const cellStyle = {
    fontWeight: "bold",
    paddingRight: "10px",
    paddingTop: "60px",
  };
  const tableHeadStyle = {
    overflowX: "auto",
    maxWidth: "50%",
  };

  const cellStyle1 = {
    fontWeight: "bold",
    paddingTop: "60px",
  };

  return (
    <div>
      <TableHead sx={tableHeadStyle}>
        <TableRow>
          <TableCell key="adInsights" colSpan={2} style={cellStyle1}>
            Ad Insights
          </TableCell>
          <TableCell key="emptySpace" style={cellStyle}></TableCell>
          <TableCell key="emptySpace" style={cellStyle2}>
            <select
              onChange={handleChange}
              style={{
                marginTop: "",
                padding: "4px",
                fontSize: "14px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                outline: "none",
              }}
            >
              {columns.map((col) => (
                <option key={col.accessor} value={col.accessor}>
                  {col.label}
                </option>
              ))}
            </select>
          </TableCell>
          <TableCell key="questionMark" style={cellStyle}>
            <FontAwesomeIcon
              icon={faQuestionCircle}
              style={{ color: "lightGray", fontSize: "24px" }}
            />
          </TableCell>
        </TableRow>
      </TableHead>
      <div style={{ display: "flex" }}>
        <div>
          <Doughnut
            style={{ marginTop: "30px", marginLeft: "40px" }}
            data={{
              labels: [],
              datasets: [
                {
                  data: data.map((item) => item.value),
                  backgroundColor: ["#f27a24", "#0f0e0e", "#1942e6"],
                  hoverBackgroundColor: ["#f27a24", "#0f0e0e", "#1942e6"],
                },
              ],
            }}
            {...doughnutParams}
          />
        </div>
        <div >
          <ul style={{ marginTop: "80px", marginLeft: "100px" }}>
            {percentageData.map((item, index) => (
              <li
                key={index}
                style={{
                  listStyle: "none",
                  display: "flex",
                  alignItems: "center",
                  fontStyle: "bold",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "10px",
                      backgroundColor:
                        item.label.toLowerCase() === "male"
                          ? "#f27a24"
                          : item.label.toLowerCase() === "female"
                          ? "#0f0e0e"
                          : item.label.toLowerCase() === "unknown"
                          ? "#1942e6"
                          : "gray",
                      marginRight: "8px", 
                      marginTop:'3px',
                      borderRadius:'10px'
                    }}
                  ></div>
                  <div style={{ fontSize: "15px", fontWeight: "normal" }}>
                    {item.value.toFixed(2)}% {item.label}.
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdInsightTable;
