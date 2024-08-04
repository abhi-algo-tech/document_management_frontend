import { Endpoints } from "../../../model/endpoints";
import { DELETE, GET, POST, PUT } from "../../../utils/api/api.method";

/**
 * This method is for Get the Question Banks List
 * @returns array of the Question Banks List | error model
 * Created by : <AS>
 * Created on : <28-July-24>
 * Modified By:<>
 * Modified On:<>
 */
export const GetQuestionBanks = () => {
  return new Promise<any>((resolve, reject) => {
    GET(Endpoints.DOCS.QuestionBank.QuestionBank)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject({ error: true, message: error.message });
      });
  });
};

/**
 * This method is for Get the Question Bank by the id
 * @returns array of the Question Bank data | error model
 * Created by : <AS>
 * Created on : <28-July-24>
 * Modified By:<>
 * Modified On:<>
 */
export const GetQuestionBankById = (questionBankId: string) => {
  return new Promise<any>((resolve, reject) => {
    GET(
      Endpoints.DOCS.QuestionBank.QuestionBankById.replace(
        "{id}",
        questionBankId
      )
    )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject({ error: true, message: error.message });
      });
  });
};

/**
 * This method is for Post the Question Bank
 * @returns array of the Question Bank data | error model
 * Created by : <AS>
 * Created on : <28-July-24>
 * Modified By:<>
 * Modified On:<>
 */
export const PostQuestionBank = (data: any) => {
  return new Promise((resolve, reject) => {
    POST(Endpoints.DOCS.QuestionBank.QuestionBank, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject({ error: true, message: error.message });
      });
  });
};

/**
 * This method is for Delete the Question Bank
 * @returns array of the Delete Question Bank | error model
 * Created by : <AS>
 * Created on : <28-July-24>
 * Modified By:<>
 * Modified On:<>
 */
export const DeleteQuestionBank = (questionBankId: string) => {
  return new Promise((resolve, reject) => {
    DELETE(
      Endpoints.DOCS.QuestionBank.QuestionBankById.replace(
        "{id}",
        questionBankId
      )
    )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject({ error: true, message: error.message });
      });
  });
};

/**
 * This method is for Put the Question Bank by the id
 * @returns array of the Put Question Bank | error model
 * Created by : <AS>
 * Created on : <28-July-24>
 * Modified By:<>
 * Modified On:<>
 */
export const PutQuestionBank = (data: any, questionBankId: string) => {
  return new Promise((resolve, reject) => {
    PUT(
      Endpoints.DOCS.QuestionBank.QuestionBankById,
      {
        id: questionBankId,
      },
      data
    )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject({ error: true, message: error.message });
      });
  });
};

/**
 * This method is for Import Question Banks
 * @returns array of the imported Question Banks | error model
 * Created by : <AS>
 * Created on : <28-July-24>
 * Modified By:<>
 * Modified On:<>
 */
export const ImportQuestionBanks = (data: FormData) => {
  return new Promise((resolve, reject) => {
    POST(Endpoints.DOCS.QuestionBank.QuestionBankImport, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject({ error: true, message: error.message });
      });
  });
};
