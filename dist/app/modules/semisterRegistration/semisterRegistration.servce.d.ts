import { SemesterRegistration } from "./semisterRegistration.interface.js";
import mongoose from "mongoose";
export declare const SemesterRegistrationService: {
    createSemesterRegistrationIntoDB: (semesterRegistration: SemesterRegistration) => Promise<mongoose.Document<unknown, {}, SemesterRegistration, {}, mongoose.DefaultSchemaOptions> & SemesterRegistration & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getAllSemesterRegistrationFromDB: (query?: Record<string, unknown>) => Promise<{
        meta: import("../../builder/queryBuilder.js").PaginationMeta;
        semesterRegistrations: SemesterRegistration[];
    }>;
    getSemesterRegistrationByIdFromDB: (id: string) => Promise<(mongoose.Document<unknown, {}, SemesterRegistration, {}, mongoose.DefaultSchemaOptions> & SemesterRegistration & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updateSemesterRegistrationInfoInDB: (id: string, updatedData: Partial<Omit<SemesterRegistration, "id">>) => Promise<(mongoose.Document<unknown, {}, SemesterRegistration, {}, mongoose.DefaultSchemaOptions> & SemesterRegistration & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteSemesterRegistrationFromDB: (id: string) => Promise<(mongoose.Document<unknown, {}, SemesterRegistration, {}, mongoose.DefaultSchemaOptions> & SemesterRegistration & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
};
//# sourceMappingURL=semisterRegistration.servce.d.ts.map