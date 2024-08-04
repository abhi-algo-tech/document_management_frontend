import { useMutation, useQuery } from "react-query";
import {
  DeleteQuestionBank,
  GetQuestionBanks,
  GetQuestionBankById,
  PostQuestionBank,
  PutQuestionBank,
  ImportQuestionBanks,
} from "../../services/QuestionBankServices";

// Get Question Banks
export const useGetQuestionBanks = () => {
  return useQuery("qGetQuestionBanks", () => GetQuestionBanks());
};

// Get Question Bank by id
export const useGetQuestionBankById = (questionBankId: string) => {
  return useQuery(["qGetQuestionBankById", questionBankId], () =>
    GetQuestionBankById(questionBankId)
  );
};

// Post Question Bank
export const usePostQuestionBank = () => {
  return useMutation(PostQuestionBank);
};

// Put Question Bank
export const usePutQuestionBank = () => {
  return useMutation(
    ({ data, questionBankId }: { data: any; questionBankId: string }) =>
      PutQuestionBank(data, questionBankId)
  );
};

// Delete Question Bank
export const useDeleteQuestionBank = () => {
  return useMutation(DeleteQuestionBank);
};

// Import Question Banks
export const useImportQuestionBanks = () => {
  return useMutation((data: FormData) => ImportQuestionBanks(data));
};
