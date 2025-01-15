import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import { logAPIError, logDebug, logError } from "../../log/logger";
import { ContentType } from "../../config/requestConfig";

import { axiosRequestConfig, AxiosInstance } from "../axiosConfig";

import {
	FetchFromLocalStorage,
	SaveToLocalStorage,
	AnyValue,
	GetRequest,
	PostRequest,
	PutRequest,
	PatchRequest,
	DeleteRequest,
} from "../types";

enum URLVersions {
	V1 = "/api/v1",
}

const saveToLocalStorage = ({ key, value }: SaveToLocalStorage): void => {
	try {
		const serializedData = JSON.stringify(value);

		localStorage.setItem(key, serializedData);
	} catch (error) {
		logError("Failed to save data to local storage");
		logDebug(`${JSON.stringify(error)}`);
		throw new Error("Failed to save data to local storage");
	}
};

const fetchDataFromLocalStorage = ({ key }: FetchFromLocalStorage): AnyValue => {
	try {
		const serializedData = localStorage.getItem(key);

		if (!serializedData) {
			return undefined;
		}

		return JSON.parse(serializedData);
	} catch (error) {
		logError("Failed to fetch data from local storage");
		logDebug(`${JSON.stringify(error)}`);
		throw new Error("Failed to fetch data from local storage");
	}
};

const clearDataFromLocalStorage = ({ key }: FetchFromLocalStorage): void => {
	try {
		localStorage.removeItem(key);
	} catch (error) {
		logError("Failed to clear data from local storage");
		logDebug(`${JSON.stringify(error)}`);
		throw new Error("Failed to clear data from local storage");
	}
};

const clearLocalStorage = (): void => {
	try {
		localStorage.clear();
	} catch (error) {
		logError("Failed to clear local storage");
		logDebug(`${JSON.stringify(error)}`);
		throw new Error("Failed to clear local storage");
	}
};

const getRequestConfig = (
	customAPIConfig?: AxiosRequestConfig,
	version: string = URLVersions.V1
): AxiosRequestConfig => {
	let config = axiosRequestConfig;
	let headers = axiosRequestConfig.headers;

	const key = "auth";
	const session = fetchDataFromLocalStorage({ key });

	if (session) {
		const Authorization = `Bearer ${JSON.parse(JSON.stringify(session)).accessToken}`;
		headers = { ...axiosRequestConfig.headers, Authorization };
	}

	config = {
		...axiosRequestConfig,
		...customAPIConfig,
		headers,
	};

	// Prepend version to baseURL if provided
	// config.baseURL = `${axiosRequestConfig.baseURL}${version}`;
	config.baseURL = `${axiosRequestConfig.baseURL}`;

	return config;
};

// ? Requests

const GET = ({
	url,
	params,
	apiConfig,
	version = URLVersions.V1,
}: GetRequest): Promise<AxiosResponse | AxiosError> => {
	try {
		const config = getRequestConfig(apiConfig, version);

		config.params = params;

		const response = AxiosInstance.get(url, config);
		return response;
	} catch (error) {
		logAPIError("Failed Get Request");
		logDebug(`${JSON.stringify(error)}`);
		throw new Error("Failed Get Request");
	}
};

const POST = ({
	url,
	data,
	apiConfig,
	version = URLVersions.V1,
}: PostRequest): Promise<AxiosResponse | AxiosError> => {
	try {
		const config = getRequestConfig(apiConfig, version);
		let postData = data;

		if (config.headers?.["Content-Type"] === ContentType.JSON) {
			postData = JSON.stringify(data);
		}

		const response = AxiosInstance.post(url, postData, config);
		return response;
	} catch (error) {
		logAPIError("Failed Post Request");
		logDebug(`${JSON.stringify(error)}`);
		throw new Error("Failed Post Request");
	}
};

const PUT = ({
	url,
	data,
	apiConfig,
	version = URLVersions.V1,
}: PutRequest): Promise<AxiosResponse | AxiosError> => {
	try {
		const config = getRequestConfig(apiConfig, version);
		let putData = data;

		if (config.headers?.["Content-Type"] === ContentType.JSON) {
			putData = JSON.stringify(data);
		}

		const response = AxiosInstance.put(url, putData, config);
		return response;
	} catch (error) {
		logAPIError("Failed Put Request");
		logDebug(`${JSON.stringify(error)}`);
		throw new Error("Failed Put Request");
	}
};

const PATCH = ({
	url,
	data,
	apiConfig,
	version = URLVersions.V1,
}: PatchRequest): Promise<AxiosResponse | AxiosError> => {
	try {
		const config = getRequestConfig(apiConfig, version);
		let patchData = data;

		if (config.headers?.["Content-Type"] === ContentType.JSON) {
			patchData = JSON.stringify(data);
		}

		const response = AxiosInstance.patch(url, patchData, config);
		return response;
	} catch (error) {
		logAPIError("Failed Patch Request");
		logDebug(`${JSON.stringify(error)}`);
		throw new Error("Failed Patch Request");
	}
};

const DELETE = async ({
	url,
	apiConfig,
	version = URLVersions.V1,
}: DeleteRequest): Promise<AxiosResponse | AxiosError> => {
	try {
		const config = getRequestConfig(apiConfig, version);

		const response = AxiosInstance.delete(url, config);
		return response;
	} catch (error) {
		logAPIError("Failed Delete Request");
		logDebug(`${JSON.stringify(error)}`);
		throw new Error("Failed Delete Request");
	}
};

export {
	saveToLocalStorage,
	fetchDataFromLocalStorage,
	clearDataFromLocalStorage,
	clearLocalStorage,
	getRequestConfig,

	// ? Requests
	GET,
	POST,
	PUT,
	PATCH,
	DELETE,

	// ? Types
	URLVersions,
	type AxiosResponse,
	type AxiosError,
};
