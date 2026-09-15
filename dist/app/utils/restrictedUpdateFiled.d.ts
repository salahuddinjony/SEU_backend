import { Schema } from "mongoose";
type UpdateMethod = "findOneAndUpdate" | "updateOne" | "updateMany";
export declare const restrictUpdateFieldsChecker: (schema: Schema, updateMethods?: UpdateMethod[], restrictedFields?: string[]) => void;
export {};
//# sourceMappingURL=restrictedUpdateFiled.d.ts.map