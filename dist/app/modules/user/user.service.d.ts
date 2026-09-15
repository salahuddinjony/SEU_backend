import { UserInterface } from "./user.interface.js";
import mongoose, { UpdateQuery, Types } from "mongoose";
import { Admin } from "../admin/admin.interface.js";
type LegacyProfile = {
    email: string;
    admissionSemester: {
        toString: () => string;
    };
    academicDept: {
        toString: () => string;
    };
    name?: {
        firstName?: string;
    };
    id?: string;
    user?: Types.ObjectId;
    profileImage?: string;
};
type Student = LegacyProfile;
type Faculty = LegacyProfile;
export declare const UserService: {
    createStudentIntoDB: (password: string, StudentData: Student, file?: Express.Multer.File, status?: UserInterface["status"]) => Promise<(mongoose.Document<unknown, {}, LegacyProfile, {}, mongoose.DefaultSchemaOptions> & LegacyProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | undefined>;
    createFacultyIntoDB: (password: string, FacultyData: Faculty, file?: Express.Multer.File) => Promise<(mongoose.Document<unknown, {}, LegacyProfile, {}, mongoose.DefaultSchemaOptions> & LegacyProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | undefined>;
    createAdminIntoDB: (password: string, AdminData: Admin, file?: Express.Multer.File) => Promise<(mongoose.Document<unknown, {}, Admin, {}, mongoose.DefaultSchemaOptions> & Admin & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | undefined>;
    createPortalUserIntoDB: (payload: {
        password: string;
        name: string;
        email: string;
        dateOfBirth?: Date;
        phone: string;
        gender: "male" | "female" | "other";
        otherDetails?: string;
    }) => Promise<mongoose.Document<unknown, {}, UserInterface, {}, mongoose.DefaultSchemaOptions> & UserInterface & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }>;
    createPortalAdminIntoDB: (payload: {
        password: string;
        name: string;
        email: string;
        phone?: string;
    }) => Promise<mongoose.Document<unknown, {}, UserInterface, {}, mongoose.DefaultSchemaOptions> & UserInterface & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }>;
    getAllUsersFromDB: (query: Record<string, unknown>) => Promise<{
        meta: import("../../builder/queryBuilder.js").PaginationMeta;
        users: UserInterface[];
    }>;
    getUserByIdFromDB: (id: string) => Promise<(mongoose.Document<unknown, {}, UserInterface, {}, mongoose.DefaultSchemaOptions> & UserInterface & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    updateUserInfoInDB: (id: string, updatedData: UpdateQuery<UserInterface>) => Promise<(mongoose.Document<unknown, {}, UserInterface, {}, mongoose.DefaultSchemaOptions> & UserInterface & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteUserFromDB: (id: string) => Promise<(mongoose.Document<unknown, {}, UserInterface, {}, mongoose.DefaultSchemaOptions> & UserInterface & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    getAllDeletedUsersFromDB: () => Promise<{
        count: number;
        message: string;
        users: (mongoose.Document<unknown, {}, UserInterface, {}, mongoose.DefaultSchemaOptions> & UserInterface & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    restoreDeletedUsersInDB: () => Promise<{
        count: number;
        message: string;
        users: (mongoose.Document<unknown, {}, UserInterface, {}, mongoose.DefaultSchemaOptions> & UserInterface & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    getMyProfileFromDB: (user: UserInterface & {
        _id?: Types.ObjectId | string;
    }) => Promise<(mongoose.Document<unknown, {}, UserInterface, {}, mongoose.DefaultSchemaOptions> & UserInterface & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | (mongoose.Document<unknown, {}, Admin, {}, mongoose.DefaultSchemaOptions> & Admin & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | (mongoose.Document<unknown, {}, LegacyProfile, {}, mongoose.DefaultSchemaOptions> & LegacyProfile & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null | undefined>;
};
export {};
//# sourceMappingURL=user.service.d.ts.map