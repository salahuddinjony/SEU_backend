import { Admin } from "./admin.interface.js";
export declare const AdminService: {
    getAllAdminsFromDB: (query?: Record<string, unknown>) => Promise<{
        meta: import("../../builder/queryBuilder.js").PaginationMeta;
        admins: Admin[];
    }>;
    getAdminByIdFromDB: (id: string) => Promise<(import("mongoose").Document<unknown, {}, Admin, {}, import("mongoose").DefaultSchemaOptions> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    updateAdminInDB: (id: string, admin: Partial<Admin>) => Promise<(import("mongoose").Document<unknown, {}, Admin, {}, import("mongoose").DefaultSchemaOptions> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteAdminFromDB: (id: string) => Promise<(import("mongoose").Document<unknown, {}, Admin, {}, import("mongoose").DefaultSchemaOptions> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=admin.service.d.ts.map