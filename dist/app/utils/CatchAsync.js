import { ZodError } from "zod";
import AppError from "../errors/handleAppError.js";
const catchAsync = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((error) => {
            if (error instanceof ZodError) {
                return next(error);
            }
            if (error instanceof AppError) {
                return next(error);
            }
            const err = error instanceof Error ? error : new Error("Unknown error");
            next(new AppError(err.message, 500));
        });
    };
};
export default catchAsync;
//# sourceMappingURL=CatchAsync.js.map