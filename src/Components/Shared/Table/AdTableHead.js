import React, { useState } from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const AdTableHead = ({ columns, handleSorting }) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  const cellStyle = {
    paddingLeft: "10px",
    paddingBottom: "2px",
    fontWeight: "bold",
  };

  const tableHeadStyle = {
    overflowX: "auto",
    maxWidth: "50%",
  };

  const cellStyle1 = {
    paddingLeft: "10px",
    paddingRight: "20px",
    paddingBottom: "10px",
    fontWeight: "bold",

  };

  return (
    <TableHead sx={tableHeadStyle}>
      <TableRow>
        <TableCell key="adInsights" colSpan={2} style={cellStyle1}>
          Ad Insights
        </TableCell>
        <TableCell key="emptySpace" style={cellStyle}></TableCell>
        <TableCell key="emptySpace" style={cellStyle}></TableCell>
        <TableCell key="questionMark" style={cellStyle} align="right">
          <FontAwesomeIcon
            icon={faQuestionCircle}
            style={{color: "lightGray" ,fontSize: "24px"}}
          />
        </TableCell>
      </TableRow>

      <TableRow>
        {columns.map(({ label, accessor, sortable }) => (
          <TableCell
            key={accessor}
            onClick={sortable ? () => handleSortingChange(accessor) : null}
            className={
              sortable
                ? sortField === accessor
                  ? order === "asc"
                    ? "up"
                    : "down"
                  : "default"
                : ""
            }
            style={cellStyle}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {label}
              {sortable && (
                <span
                  className="icon"
                  style={{ marginLeft: "8px", marginBottom: "2px" }}
                >
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    style={{ color: "#e0e2e5" }}
                  />
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{
                      color: "#e0e2e5",
                      marginBottom: "-10px",
                      marginLeft: "-13px",
                    }}
                  />
                </span>
              )}
            </div>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default AdTableHead;
