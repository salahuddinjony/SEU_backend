export const handleCastError = (error) => {
    const errorSources = [
        {
            path: error.path,
            message: error.message
        }
    ];
    return {
        statusCode: 400,
        message: error.message,
        error: errorSources
    };
};
//# sourceMappingURL=handleCastError.js.map