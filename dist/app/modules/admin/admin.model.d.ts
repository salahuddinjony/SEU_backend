import { Schema } from "mongoose";
import { Admin } from "./admin.interface.js";
export declare const userNameSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    firstName: string;
    lastName: string;
    middleName?: string | null;
}, import("mongoose").Document<unknown, {}, {
    firstName: string;
    lastName: string;
    middleName?: string | null;
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    firstName: string;
    lastName: string;
    middleName?: string | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    firstName: string;
    lastName: string;
    middleName?: string | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const AdminModel: import("mongoose").Model<Admin, {}, {}, {}, import("mongoose").Document<unknown, {}, Admin, {}, import("mongoose").DefaultSchemaOptions> & Admin & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, Admin>;
export default AdminModel;
//# sourceMappingURL=admin.model.d.ts.map