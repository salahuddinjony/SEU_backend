import { Request } from "express";
type NormalizeUpdateRequestBodyOptions = {
    payloadKey: string;
    shape: "nested" | "flat";
    dataKey?: string;
};
export declare const normalizeUpdateRequestBody: (req: Request, options: NormalizeUpdateRequestBodyOptions) => void;
export {};
//# sourceMappingURL=normalizeUpdateRequestBody.d.ts.map