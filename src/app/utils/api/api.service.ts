// import axios from "axios";
// import GetHeader from "./header";
// import { RD_BASE_URL } from "@/environment";

// export const AxGet = async (
//   endpoint: string,
//   isPublicRoute: boolean,
//   data?: any,
//   headers?: any
// ): Promise<any> => {
//   const defaultHeaders = headers ? headers : GetHeader(isPublicRoute);
//   const config = {
//     headers: defaultHeaders,
//   };
//   return await axios.get(
//     `${RD_BASE_URL}${endpoint}${
//       data == undefined || null || "" ? "" : "/" + data
//     }`,
//     config
//   );
// };
// //Post request
// export const AxPost = async (
//   endpoint: string,
//   isPublicRoute: boolean,
//   data: any,
//   headers?: any
// ): Promise<any> => {
//   const defaultHeaders = headers ? headers : GetHeader(isPublicRoute);
//   const config = {
//     headers: defaultHeaders,
//   };
//   return await axios.post(`${RD_BASE_URL}${endpoint}`, data, config);
// };

// export const AxPut = async (
//   endpoint: string,
//   isPublicRoute: boolean,
//   data: any,
//   headers?: any
// ): Promise<any> => {
//   const defaultHeaders = headers ? headers : GetHeader(isPublicRoute);
//   const config = {
//     headers: defaultHeaders,
//   };
//   return await axios.put(`${RD_BASE_URL}${endpoint}`, data, config);
// };

// export const AxDelete = async (
//   endpoint: string,
//   isPublicRoute: boolean,
//   data?: any,
//   headers?: any
// ) => {
//   const defaultHeaders = headers ? headers : GetHeader(isPublicRoute);
//   const config = {
//     headers: defaultHeaders,
//   };
//   return await axios.get(
//     `${RD_BASE_URL}${endpoint}${
//       data == undefined || null || "" ? "" : "/" + data
//     }`,
//     config
//   );
// };

// src/services/api.service.ts

import axios from "axios";
import GetHeader from "./header";
import { RD_BASE_URL } from "../../environment";

export const AxGet = async (
  endpoint: string,
  data?: any,
  headers?: any
): Promise<any> => {
  const defaultHeaders = headers ? headers : GetHeader();
  const config = {
    headers: defaultHeaders,
  };
  return await axios.get(
    `${RD_BASE_URL}${endpoint}${data ? "/" + data : ""}`,
    config
  );
};
export const AxPost = async (
  endpoint: string,
  data: any,
  headers?: Record<string, string>
): Promise<any> => {
  const configHeaders = GetHeader(headers);
  const config = {
    headers: configHeaders,
  };
  return await axios.post(`${RD_BASE_URL}${endpoint}`, data, config);
};
export const AxPut = async (
  endpoint: string,
  data: any,
  headers?: any
): Promise<any> => {
  const configHeaders = GetHeader(headers);
  const config = {
    headers: configHeaders,
  };
  return await axios.put(`${RD_BASE_URL}${endpoint}`, data, config);
};

export const AxDelete = async (
  endpoint: string,
  data?: any,
  headers?: any
): Promise<any> => {
  const defaultHeaders = headers ? headers : GetHeader();
  const config = {
    headers: defaultHeaders,
  };
  return await axios.delete(
    `${RD_BASE_URL}${endpoint}${data ? "/" + data : ""}`,
    config
  );
};
