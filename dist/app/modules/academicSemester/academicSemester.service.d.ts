import { AcademicSemester } from "./academicSemester.interface.js";
import mongoose from "mongoose";
export declare const AcademicSemesterService: {
    createSemesterIntoDB: (semesterData: AcademicSemester) => Promise<mongoose.Document<unknown, {}, AcademicSemester, {}, mongoose.DefaultSchemaOptions> & AcademicSemester & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getAllSemestersFromDB: (query?: Record<string, unknown>) => Promise<{
        meta: import("../../builder/queryBuilder.js").PaginationMeta;
        data: AcademicSemester[];
    }>;
    getAllDeletedSemestersFromDB: () => Promise<(mongoose.Document<unknown, {}, AcademicSemester, {}, mongoose.DefaultSchemaOptions> & AcademicSemester & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getSemesterByIdFromDB: (id: string) => Promise<(mongoose.Document<unknown, {}, AcademicSemester, {}, mongoose.DefaultSchemaOptions> & AcademicSemester & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updateSemesterInfoInDB: (id: string, updatedData: Partial<Omit<AcademicSemester, "id">>) => Promise<(mongoose.Document<unknown, {}, AcademicSemester, {}, mongoose.DefaultSchemaOptions> & AcademicSemester & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteSemesterFromDB: (id: string) => Promise<(mongoose.Document<unknown, {}, AcademicSemester, {}, mongoose.DefaultSchemaOptions> & AcademicSemester & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    restoreDeletedSemestersInDB: () => Promise<(mongoose.Document<unknown, {}, AcademicSemester, {}, mongoose.DefaultSchemaOptions> & AcademicSemester & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[] | null>;
    restoreDeletedSemesterByIdInDB: (id: string) => Promise<(mongoose.Document<unknown, {}, AcademicSemester, {}, mongoose.DefaultSchemaOptions> & AcademicSemester & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
};
//# sourceMappingURL=academicSemester.service.d.ts.map