import { Response } from "express";
type responseT<T> = {
    statusCode: number;
    success: boolean;
    message: string;
    data?: T;
};
declare const sendResponse: <T>(res: Response, data: responseT<T>) => void;
export default sendResponse;
//# sourceMappingURL=responseSend.d.ts.map