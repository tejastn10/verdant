const logMessage = (message: string): void => {
	console.log(`[INFO] ${message}`);
};

const logError = (error: string): void => {
	console.error("[ERROR]", error);
};

const logNetworkError = (error: string): void => {
	console.error("[NETWORK ERROR]", error);
};

const logAPIError = (error: string): void => {
	console.error("[API ERROR]", error);
};

const logDebug = (message: string): void => {
	console.debug(`[DEBUG] ${message}`);
};

const logVerbose = (message: string): void => {
	console.log(`[VERBOSE] ${message}`);
};

const logWarning = (message: string): void => {
	console.warn(`[WARNING] ${message}`);
};

const logTable = (object: object): void => {
	console.table(object);
};

export {
	logMessage,
	logError,
	logNetworkError,
	logAPIError,
	logDebug,
	logVerbose,
	logWarning,
	logTable,
};
