import axios, { AxiosRequestConfig } from "axios";
import { service } from "@/config";

const { serviceUrl } = service;

const request = (sourceUrl: string, config?: AxiosRequestConfig) =>
  axios(`${serviceUrl}${sourceUrl}`, config);

export const getDepartments = async () => request("/departments");
