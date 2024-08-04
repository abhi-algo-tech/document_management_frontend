// import React from "react";
// import { ColDef } from "ag-grid-community";
// import CommonTable from "../../../../_metronic/layout/components/table/CommonTable";

// const QuestionBankTable: React.FC = () => {
//   const columnDefs: ColDef[] = [
//     { headerName: "Make", field: "make" },
//     { headerName: "Model", field: "model" },
//     { headerName: "Price", field: "price" },
//   ];

//   const rowData = [
//     { make: "Toyota", model: "Celica", price: 35000 },
//     { make: "Ford", model: "Mondeo", price: 32000 },
//     { make: "Porsche", model: "Boxster", price: 72000 },
//     { make: "Porsche", model: "Boxster", price: 72000 },
//     { make: "Porsche", model: "Boxster", price: 72000 },
//     { make: "Porsche", model: "Boxster", price: 72000 },
//     { make: "Porsche", model: "Boxster", price: 72000 },
//   ];

//   return (
//     <div className="App">
//       <CommonTable
//         columnDefs={columnDefs}
//         rowData={rowData}
//         enableCheckbox={true}
//         showExcelExport={true}
//       />
//     </div>
//   );
// };

// export default QuestionBankTable;

import React from "react";
import { ColDef } from "ag-grid-community";
import CommonTable from "../../../../_metronic/layout/components/table/CommonTable";
import { useGetQuestionBanks } from "../hooks/queries/QuestionBankQuery";

const QuestionBankTable: React.FC = () => {
  const {
    data: questionBanks,
    isLoading,
    isError,
    error,
  } = useGetQuestionBanks();

  const columnDefs: ColDef[] = [
    // { headerName: "sr_no", field: "sr_no_qbm" },
    { headerName: "Question", field: "question_qbm" },
    { headerName: "Marks", field: "marks_qbm" },
  ];

  const rowData = questionBanks || [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <div className="App">
      <CommonTable
        columnDefs={columnDefs}
        rowData={rowData}
        enableCheckbox={true}
        showExcelExport={true}
      />
    </div>
  );
};

export default QuestionBankTable;
