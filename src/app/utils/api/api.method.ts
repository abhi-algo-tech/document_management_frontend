import { parseTemplate } from "url-template";
import { AxDelete, AxGet, AxPost, AxPut } from "./api.service";
/**
 * This method is for Get request for api through axios
 * @param {string} endpoint API Method Path
 * @param {object} headers API Header (if any)
 * @param {object} data Data to be sent (if any)
 * @returns response object received from the api
 */
export const GET = async (endpoint: string, data?: any, headers?: any) => {
  return await AxGet(parseTemplate(endpoint).expand(data), headers);
};

/**
 * This method is for Post request for api through axios
 * @param {string} endpoint API Method Path
 * @param {object} headers API Header (if any)
 * @param {object} data Data to be sent (if any)
 * @returns response object received from the api
 */

export const POST = async (endpoint: string, data: any, headers?: any) => {
  return await AxPost(endpoint, data, headers);
};
/**
 * This method is for Put request for api through axios
 * @param {string} endpoint API Method Path
 * @param {object} headers API Header (if any)
 * @param {object} data Data to be sent (if any)
 * @returns response object received from the api
 */

export const PUT = async (
  endpoint: string,
  pathParams: any,
  data: any,
  headers?: any
) => {
  return await AxPut(parseTemplate(endpoint).expand(pathParams), data, headers);
};
/**
 * This method is for Delete request for api through axios
 * @param {string} endpoint API Method Path
 * @param {object} headers API Header (if any)
 * @param {object} data Data to be sent (if any)
 * @returns response object received from the api
 */
export const DELETE = async (endpoint: string, data?: any, headers?: any) => {
  return await AxDelete(parseTemplate(endpoint).expand(data), headers);
};
