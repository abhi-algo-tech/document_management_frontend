import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import { QuestionBankListWrapper } from "./question-bank-list/QuestionBankList";

const questionBreadcrumbs: Array<PageLink> = [
  {
    title: "Question Bank",
    path: "/crafted/question-bank/list",
    isSeparator: false,
    isActive: false,
  },
  {
    title: "",
    path: "",
    isSeparator: true,
    isActive: false,
  },
];

const QuestionBank = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path="list"
          element={
            <>
              <PageTitle breadcrumbs={questionBreadcrumbs}>
                Question List
              </PageTitle>
              <QuestionBankListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to="/crafted/question-bank" />} />
    </Routes>
  );
};

export default QuestionBank;
