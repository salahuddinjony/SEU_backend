import { Faculty } from "./faculty.interface.js";
import mongoose from "mongoose";
export declare const FacultyService: {
    getAllFacultiesFromDB: (query?: Record<string, unknown>) => Promise<{
        meta: import("../../builder/queryBuilder.js").PaginationMeta;
        faculties: Faculty[];
    }>;
    getFacultyByIdFromDB: (id: string) => Promise<(mongoose.Document<unknown, {}, Faculty, {}, mongoose.DefaultSchemaOptions> & Faculty & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    updateFacultyByIdInDB: (id: string, updatedData: Partial<Omit<Faculty, "id">>) => Promise<(mongoose.Document<unknown, {}, Faculty, {}, mongoose.DefaultSchemaOptions> & Faculty & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteFacultyByIdInDB: (id: string) => Promise<(mongoose.Document<unknown, {}, Faculty, {}, mongoose.DefaultSchemaOptions> & Faculty & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=faculty.service.d.ts.map