import { NextFunction, Request, Response } from "express";
import { z } from "zod";
export type ValidationSource = "body" | "cookies" | "query";
declare const validation: (schema: z.ZodTypeAny, source?: ValidationSource) => (req: Request, _res: Response, next: NextFunction) => Promise<void>;
export default validation;
//# sourceMappingURL=validetResquest.d.ts.map