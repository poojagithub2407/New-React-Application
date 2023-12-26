import AdTableHead from "./AdTableHead";
import  useSortableTable  from "./useSortTable";
import AdTableBody from "./AdTablebody";

import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
;
const AdTable = ({ data, columns }) => {
  const [tableData, handleSorting] = useSortableTable(data, columns);

  return (
    <TableContainer className="table" component={Paper}>
      <Table>
        <AdTableHead columns={columns} handleSorting={handleSorting} />
        <AdTableBody tableData={tableData} columns={columns} />
      </Table>
    </TableContainer>
  );
};

export default AdTable;