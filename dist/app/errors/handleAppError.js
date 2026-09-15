class AppError extends Error {
    constructor(message, statusCode, details) {
        super(message); // Call the parent constructor with the error message
        this.statusCode = statusCode;
        this.details = details;
    }
}
export default AppError;
//# sourceMappingURL=handleAppError.js.map