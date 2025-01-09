import { AxiosRequestConfig } from "axios";
import { URLVersions } from "../helper";

type AnyValue = undefined | null | string | number | boolean | Record<string, unknown>;

type FetchFromLocalStorage = {
	key: string;
};

type SaveToLocalStorage = FetchFromLocalStorage & {
	value: AnyValue;
};

type BaseRequest = {
	url: string;
	version: URLVersions;
	apiConfig?: AxiosRequestConfig;
};

type GetRequest = BaseRequest & {
	params?: Record<string, unknown>;
};

type PostRequest = BaseRequest & {
	data: AnyValue;
};

type PutRequest = PostRequest;

type PatchRequest = PostRequest;

type DeleteRequest = BaseRequest;

export type {
	FetchFromLocalStorage,
	SaveToLocalStorage,
	BaseRequest,
	GetRequest,
	PostRequest,
	PutRequest,
	PatchRequest,
	DeleteRequest,
	AnyValue,
};
