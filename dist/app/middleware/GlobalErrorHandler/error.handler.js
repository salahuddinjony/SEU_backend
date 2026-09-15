import AppError from "../../errors/handleAppError.js";
import { ZodError } from "zod";
import { handleZodError } from "../../errors/handleZodError.js";
import config from "../../config/index.js";
import { handleValidationError } from "../../errors/handleValidationError.js";
import { handleCastError } from "../../errors/handleCastError.js";
export const globalErrorHandler = (error, req, res, next) => {
    console.error("Global error handler:", error);
    let statusCode = 500;
    let message = "Internal Server Error";
    let errorSources = [
        {
            path: "",
            message: "Internal Server Error",
        },
    ];
    if (error instanceof ZodError) {
        // If the error is a ZodError, handle it using the handleZodError function
        const simplifiedError = handleZodError(error);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSources = simplifiedError.error;
    }
    else if (error instanceof Error && error.name === "ValidationError") {
        // Handle Mongoose validation errors
        const simplifiedError = handleValidationError(error);
        message = simplifiedError.message;
        errorSources = simplifiedError.error;
    }
    else if (error instanceof Error && error.name === "CastError") {
        const simplifiedError = handleCastError(error);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSources = simplifiedError.error;
    }
    else if (error instanceof AppError) {
        statusCode = error.statusCode;
        message = error.message;
        const details = Array.isArray(error.details) ? error.details : null;
        errorSources =
            details && details.length > 0
                ? details
                : [
                    {
                        path: "",
                        message: error.message,
                    },
                ];
    }
    else if (error instanceof Error) {
        message = error.message;
        errorSources = [{ path: "", message: error.message }];
    }
    // Send the error response to the client
    res.status(statusCode).json({
        success: false,
        message: message,
        error: errorSources,
        stack: config.DEVELOPMENT_MODE ? error.stack : undefined,
        // ...(error.details ? { errors: error.details } : {}) // Include details if available which show array of errors
    });
};
// 404 handler for undefined routes
export const notFoundHandler = (req, res, next) => {
    // Ignore favicon request
    if (req.originalUrl.includes("favicon.ico")) {
        return res.status(204).end();
    }
    // Forward 404 error
    next(new AppError(`Route ${req.originalUrl} not found`, 404));
};
//# sourceMappingURL=error.handler.js.map