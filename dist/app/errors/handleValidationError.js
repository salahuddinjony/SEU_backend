// handle mongoose validation errors and zod validation errors in global error handler
export const handleValidationError = (error) => {
    const errorSources = Object.values(error.errors).map((err) => ({
        path: err.path[err.path.length - 1],
        message: err.message
    }));
    return {
        statusCode: 400,
        message: 'Validation Error',
        error: errorSources
    };
};
//# sourceMappingURL=handleValidationError.js.map