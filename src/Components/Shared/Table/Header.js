import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import '../../Dashboard/dashboard.css'
const Header = ({ columns, cellStyle, cellStyle1, handleChange }) => {
  return (
    <TableRow>
      <TableCell key="adInsights">
        Ad Insights
      </TableCell>
      {columns.map((col) => (
        <TableCell key={col.accessor} style={cellStyle}></TableCell>
      ))}
      <TableCell className="questionMark">
        <select onChange={handleChange}>
          {columns.map((col) => (
            <option key={col.accessor} value={col.accessor}>
              {col.label}
            </option>
          ))}
        </select>
      </TableCell>
      <TableCell className="questionMark" key="questionMark">
        {faQuestionCircle && (
          <FontAwesomeIcon
            icon={faQuestionCircle}
            style={{ color: "lightGray", fontSize: "24px" }}
          />
        )}
      </TableCell>
    </TableRow>
  );
};

export default Header;
