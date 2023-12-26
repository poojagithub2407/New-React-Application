import React from "react";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const AdTableBody = ({ tableData, columns }) => {
  const calculateTotal = (columnAccessor) => {
    return tableData.reduce((total, data) => {
      const value = parseFloat(data[columnAccessor]) || 0;
      return total + value;
    }, 0);
  };

  const cellStyle = {
    paddingLeft: "20px",
    paddingRight: "50px",
    paddingBottom: "2px",
  };

  return (
    <TableBody>
      {tableData.map((data, index) => (
        <TableRow key={data.id}>
          {columns.map(({ accessor }) => (
            <TableCell key={accessor} style={cellStyle}>
              {accessor === "cost" || accessor === "revenue" ? (
                <span style={{ whiteSpace: "nowrap" }}>
                  USD {data[accessor]}
                </span>
              ) : (
                data[accessor]
              )}
            </TableCell>
          ))}
        </TableRow>
      ))}
      <TableRow>
        {columns.map(({ accessor }, columnIndex) => (
          <TableCell key={accessor} style={cellStyle}>
            {columnIndex === 0 ? (
              "Total " + calculateTotal(accessor)
            ) : accessor === "cost" || accessor === "revenue" ? (
              <span style={{ whiteSpace: "nowrap" }}>
                USD {calculateTotal(accessor)}
              </span>
            ) : (
              calculateTotal(accessor)
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableBody>
  );
};

export default AdTableBody;
