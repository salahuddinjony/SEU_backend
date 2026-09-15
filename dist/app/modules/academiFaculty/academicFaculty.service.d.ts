import { AcademicFaculty } from "./academicFaculty.interface.js";
import mongoose from "mongoose";
export declare const getAllAcademicFacultiesFromDB: (query?: Record<string, unknown>) => Promise<{
    meta: import("../../builder/queryBuilder.js").PaginationMeta;
    data: AcademicFaculty[];
}>;
export declare const AcademicFacultyService: {
    createAcademicFacultyIntoDB: (facultyData: AcademicFaculty) => Promise<(mongoose.Document<unknown, {}, AcademicFaculty, {}, mongoose.DefaultSchemaOptions> & AcademicFaculty & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | undefined>;
    getAllAcademicFacultiesFromDB: (query?: Record<string, unknown>) => Promise<{
        meta: import("../../builder/queryBuilder.js").PaginationMeta;
        data: AcademicFaculty[];
    }>;
    getAcademicFacultyByIdFromDB: (id: string) => Promise<(mongoose.Document<unknown, {}, AcademicFaculty, {}, mongoose.DefaultSchemaOptions> & AcademicFaculty & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updateAcademicFacultyInfoInDB: (id: string, updatedData: Partial<Omit<AcademicFaculty, "id">>) => Promise<(mongoose.Document<unknown, {}, AcademicFaculty, {}, mongoose.DefaultSchemaOptions> & AcademicFaculty & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteAcademicFacultyFromDB: (id: string) => Promise<(mongoose.Document<unknown, {}, AcademicFaculty, {}, mongoose.DefaultSchemaOptions> & AcademicFaculty & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    restoreDeletedAcademicFacultiesInDB: () => Promise<(mongoose.Document<unknown, {}, AcademicFaculty, {}, mongoose.DefaultSchemaOptions> & AcademicFaculty & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[] | null>;
    getAllDeletedAcademicFacultiesFromDB: () => Promise<{
        count: number;
        faculties: (mongoose.Document<unknown, {}, AcademicFaculty, {}, mongoose.DefaultSchemaOptions> & AcademicFaculty & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[];
    } | null>;
};
//# sourceMappingURL=academicFaculty.service.d.ts.map