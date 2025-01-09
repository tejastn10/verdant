import axios, { AxiosRequestConfig } from "axios";

import { ContentType, ResponseType, ResponseEncoding } from "../config/requestConfig";

const baseURL = (import.meta.env.VITE_API_BASE_URL as string) ?? "http://localhost:5000";

const axiosRequestConfig: AxiosRequestConfig = {
	baseURL,
	headers: {
		"Content-Type": ContentType.JSON,
	},
	timeout: 330000,
	withCredentials: false,
	responseType: ResponseType.JSON,
	responseEncoding: ResponseEncoding.UTF8,
	maxContentLength: 50000,
	validateStatus(status) {
		return status >= 200 && status < 300;
	},
	maxRedirects: 5,
};

const AxiosInstance = axios.create(axiosRequestConfig);

export { axiosRequestConfig, AxiosInstance };
