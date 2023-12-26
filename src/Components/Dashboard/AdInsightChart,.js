import React, { useState } from "react";
import tableData2 from "../../tableData2.json";
import AdTable from "../Shared/Table/AdTable";
import AdInsightTable from "./AdInsightTable";

import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";

const label = { inputProps: { "aria-label": "Size switch demo" } };

const columns = [
  { label: "Groups", accessor: "group", sortable: true },
  { label: "Clicks", accessor: "clicks", sortable: true },
  { label: "Cost", accessor: "cost", sortable: true },
  { label: "Convensions", accessor: "convensions", sortable: true },
  { label: "Renvenue", accessor: "renvenue", sortable: true },
];

const Container = styled("div")({
  position: "relative",
  paddingBottom: "100px",
  border: "1px solid lightGray",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "50vh",
});

const ToggleSwitchContainer = styled("div")({
  position: "absolute",
  bottom: "20px",
  right: "20px",
});

function AdInsightChart() {
  const [showAdInsightTable, setShowAdInsightTable] = useState(true);

  const toggleAdInsightTable = () => {
    setShowAdInsightTable(!showAdInsightTable);
  };

  return (
    <Container>
      <Stack spacing={2} direction="column" alignItems="center">
        {showAdInsightTable ? (
          <div>
            <AdTable data={tableData2} columns={columns} />
          </div>
        ) : (
          <div>
            <AdInsightTable />
          </div>
        )}

        <div></div>
        <ToggleSwitchContainer className="toggleSwitch">
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  {...label}
                  checked={showAdInsightTable}
                  onChange={toggleAdInsightTable}
                />
              }
          />
          </FormGroup>
        </ToggleSwitchContainer>
      </Stack>
    </Container>
  );
}

export default AdInsightChart;
