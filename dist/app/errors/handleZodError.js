export const handleZodError = (err) => {
    const errorSources = err.issues.map((issue) => ({
        path: issue.path.length > 0 ? issue.path.map(String).join(".") : "",
        message: issue.message,
    }));
    return {
        statusCode: 400,
        message: "Validation Error",
        error: errorSources,
    };
};
//# sourceMappingURL=handleZodError.js.map