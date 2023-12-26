import React from 'react'
import AdTable from '../Shared/Table/AdTable'
import tableData from '../../tableData.json'

const columns = [
     { label: "Campaigns", accessor: "campaigns", sortable: true },
     { label: "Clicks", accessor: "clicks", sortable: true },
     { label: "Cost", accessor: "cost", sortable: true, },
     { label: "Convensions", accessor: "convensions", sortable: true },
     { label: "Renvenue", accessor: "renvenue", sortable: true },
   ];
function AdInsight() {
  return (
    <div>
      <AdTable
        data={tableData}
        columns={columns}
      />
    </div>
  )
}

export default AdInsight