import { Student } from "./student.interface.js";
import mongoose from "mongoose";
export declare const StudentService: {
    getAllStudentsFromDB: (query: Record<string, unknown>) => Promise<{
        meta: import("../../builder/queryBuilder.js").PaginationMeta;
        students: Student[];
    }>;
    getAllDeletedStudentsFromDB: () => Promise<{
        count: number;
        students: (mongoose.Document<unknown, {}, Student, {}, mongoose.DefaultSchemaOptions> & Student & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    getStudentByIdFromDB: (id: string) => Promise<(mongoose.Document<unknown, {}, Student, {}, mongoose.DefaultSchemaOptions> & Student & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    updateStudentInfoInDB: (id: string, updatedData: Partial<Omit<Student, "id" & "email" & "user" & "isDeleted">>) => Promise<(mongoose.Document<unknown, {}, Student, {}, mongoose.DefaultSchemaOptions> & Student & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteStudentFromDB: (id: string) => Promise<(mongoose.Document<unknown, {}, Student, {}, mongoose.DefaultSchemaOptions> & Student & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    restoreDeletedStudentsInDB: () => Promise<{
        count: number;
        students: (mongoose.Document<unknown, {}, Student, {}, mongoose.DefaultSchemaOptions> & Student & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        })[];
        message: string;
    }>;
};
//# sourceMappingURL=student.service.d.ts.map