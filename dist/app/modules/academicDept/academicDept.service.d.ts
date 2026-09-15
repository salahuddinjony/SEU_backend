import { AcademicDept } from "./academicDept.interface.js";
import mongoose from "mongoose";
export declare const AcademicDeptService: {
    createAcademicDeptIntoDB: (academicDeptData: AcademicDept) => Promise<mongoose.Document<unknown, {}, AcademicDept, {}, mongoose.DefaultSchemaOptions> & AcademicDept & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getAllAcademicDeptsFromDB: (query?: Record<string, unknown>) => Promise<{
        total: number;
        page: number;
        limit: number;
        academicDepts: AcademicDept[];
    }>;
    getAcademicDeptByIdFromDB: (id: string) => Promise<(mongoose.Document<unknown, {}, AcademicDept, {}, mongoose.DefaultSchemaOptions> & AcademicDept & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updateAcademicDeptInfoInDB: (id: string, updatedData: Partial<Omit<AcademicDept, "id">>) => Promise<(mongoose.Document<unknown, {}, AcademicDept, {}, mongoose.DefaultSchemaOptions> & AcademicDept & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteAcademicDeptFromDB: (id: string) => Promise<(mongoose.Document<unknown, {}, AcademicDept, {}, mongoose.DefaultSchemaOptions> & AcademicDept & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    restoreDeletedAcademicDeptsInDB: () => Promise<(mongoose.Document<unknown, {}, AcademicDept, {}, mongoose.DefaultSchemaOptions> & AcademicDept & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[] | null>;
    getAllDeletedAcademicDeptsFromDB: () => Promise<{
        count: number;
        academicDepts: (mongoose.Document<unknown, {}, AcademicDept, {}, mongoose.DefaultSchemaOptions> & AcademicDept & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[];
    } | null>;
};
//# sourceMappingURL=academicDept.service.d.ts.map