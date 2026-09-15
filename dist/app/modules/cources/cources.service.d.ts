import mongoose from "mongoose";
import { assignCourcesToFaculties, Course } from "./cources.interface.js";
export declare const CourseService: {
    createCourseIntoDB: (course: Course) => Promise<mongoose.Document<unknown, {}, Course, {}, mongoose.DefaultSchemaOptions> & Course & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getAllCourcesFromDB: (query?: Record<string, unknown>) => Promise<{
        meta: import("../../builder/queryBuilder.js").PaginationMeta;
        courses: Course[];
    }>;
    getSingleCourseByIdFromDB: (id: string) => Promise<(mongoose.Document<unknown, {}, Course, {}, mongoose.DefaultSchemaOptions> & Course & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updateCourseByIdInDB: (id: string, updatedData: Partial<Course>) => Promise<(mongoose.Document<unknown, {}, Course, {}, mongoose.DefaultSchemaOptions> & Course & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteCourseByIdInDB: (id: string) => Promise<(mongoose.Document<unknown, {}, Course, {}, mongoose.DefaultSchemaOptions> & Course & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    assignCourcesToFacultiesInDB: (courseId: string, facultyData: Partial<assignCourcesToFaculties>) => Promise<mongoose.Document<unknown, {}, assignCourcesToFaculties, {}, mongoose.DefaultSchemaOptions> & assignCourcesToFaculties & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    unassignCourcesFromFacultiesInDB: (courseId: string, facultyIds: string[]) => Promise<mongoose.Document<unknown, {}, assignCourcesToFaculties, {}, mongoose.DefaultSchemaOptions> & assignCourcesToFaculties & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getAllCoursesAssignedToFacultiesInDB: () => Promise<(mongoose.Document<unknown, {}, assignCourcesToFaculties, {}, mongoose.DefaultSchemaOptions> & assignCourcesToFaculties & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getSingleAssignedCourseToFacultyInDB: (facultyId: string) => Promise<(mongoose.Document<unknown, {}, assignCourcesToFaculties, {}, mongoose.DefaultSchemaOptions> & assignCourcesToFaculties & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    getAssignedFacultyByCourseIdInDB: (courseId: string) => Promise<{
        meta: import("../../builder/queryBuilder.js").PaginationMeta;
        facultiesData: assignCourcesToFaculties[];
    }>;
};
//# sourceMappingURL=cources.service.d.ts.map