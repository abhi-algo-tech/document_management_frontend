import React, { useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, GridApi } from "ag-grid-community";
import { Button } from "@material-ui/core";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import * as XLSX from "xlsx";

interface CommonTableProps {
  columnDefs: ColDef[];
  rowData: any[];
  enableCheckbox?: boolean;
  showExcelExport?: boolean; // New prop to control Excel export visibility
}

const CommonTable: React.FC<CommonTableProps> = ({
  columnDefs,
  rowData,
  enableCheckbox = false,
  showExcelExport = false, // Default to false to show export button
}) => {
  const gridApi = useRef<GridApi | null>(null);

  const defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    flex: 1, // Make columns flex to cover remaining space
  };

  const checkboxSelection = enableCheckbox
    ? {
        checkboxSelection: true,
        headerCheckboxSelection: true,
        minWidth: 40,
        width: 40,
        maxWidth: 40,
        filter: false,
      }
    : {};

  const modifiedColumnDefs = enableCheckbox
    ? [{ ...checkboxSelection }, ...columnDefs]
    : columnDefs;

  const onGridReady = (params: any) => {
    gridApi.current = params.api;
  };

  const exportToExcel = () => {
    if (!gridApi.current) return;
    const selectedNodes = gridApi.current.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const worksheet = XLSX.utils.json_to_sheet(selectedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "selected_data.xlsx");
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        className="ag-theme-alpine"
        style={{ height: "300px", width: "100%" }}
      >
        <AgGridReact
          columnDefs={modifiedColumnDefs}
          rowData={rowData}
          defaultColDef={defaultColDef}
          rowSelection={enableCheckbox ? "multiple" : "single"}
          onGridReady={onGridReady}
          suppressRowClickSelection={true}
          pagination={true}
          paginationPageSize={5}
          paginationPageSizeSelector={[5, 10, 25, 50]}
        />
      </div>
      {enableCheckbox && showExcelExport && (
        <div style={{ marginTop: "10px", textAlign: "right" }}>
          <Button variant="contained" color="primary" onClick={exportToExcel}>
            Export to Excel
          </Button>
        </div>
      )}
    </div>
  );
};

export default CommonTable;
