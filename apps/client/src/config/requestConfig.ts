enum Method {
	GET = "GET",
	DELETE = "DELETE",
	HEAD = "HEAD",
	OPTIONS = "OPTIONS",
	POST = "POST",
	PUT = "PUT",
	PATCH = "PATCH",
	PURGE = "PURGE",
	LINK = "LINK",
	UNLINK = "UNLINK",
}

enum ResponseType {
	ARRAYBUFFER = "arraybuffer",
	BLOB = "blob",
	DOCUMENT = "document",
	JSON = "json",
	TEXT = "text",
	STREAM = "stream",
}

enum ResponseEncoding {
	ASCII = "ascii",
	ANSI = "ansi",
	BINARY = "binary",
	BASE64 = "base64",
	BASE64URL = "base64url",
	HEX = "hex",
	LATIN1 = "latin1",
	UCS2 = "ucs-2",
	UTF8 = "utf-8",
	UTF16LE = "utf16le",
}

enum ContentType {
	JSON = "application/json",
	FORM_URLENCODED = "application/x-www-form-urlencoded",
	FORM_DATA = "multipart/form-data",
	TEXT_PLAIN = "text/plain",
}

export { Method, ResponseType, ResponseEncoding, ContentType };
