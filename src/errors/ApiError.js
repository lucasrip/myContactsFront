export default class ApiError extends Error {
    constructor(response, body)
    {
        const errorMessage = body?.error || `${response.status} - ${response.statusText}`;

        super(errorMessage);
        this.name = "ApiError";
        this.response = response;
    }
}