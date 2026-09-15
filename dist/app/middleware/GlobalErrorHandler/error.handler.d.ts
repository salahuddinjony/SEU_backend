import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
export declare const globalErrorHandler: ErrorRequestHandler;
export declare const notFoundHandler: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=error.handler.d.ts.map