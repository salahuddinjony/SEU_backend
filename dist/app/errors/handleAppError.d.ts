declare class AppError extends Error {
    statusCode: number;
    details?: unknown;
    constructor(message: string, statusCode: number, details?: unknown);
}
export default AppError;
//# sourceMappingURL=handleAppError.d.ts.map