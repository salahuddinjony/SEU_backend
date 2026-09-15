import { EnrolledCourse } from "./enrolledCourse.interface.js";
import { Types } from "mongoose";
import { TokenPayloadType } from "../../utils/commonTypes/types.js";
export declare const EnrolledCourseService: {
    createEnrolledCourseIntoDB: (userId: string, payload: Partial<EnrolledCourse>) => Promise<(import("mongoose").Document<unknown, {}, EnrolledCourse, {}, import("mongoose").DefaultSchemaOptions> & EnrolledCourse & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | undefined>;
    getAllEnrolledCoursesFromDB: (query?: Record<string, unknown>) => Promise<{
        meta: import("../../builder/queryBuilder.js").PaginationMeta;
        enrolledCourses: EnrolledCourse[];
    }>;
    getEnrolledCourseByIdFromDB: (enrolledCourseId: string) => Promise<import("mongoose").Document<unknown, {}, EnrolledCourse, {}, import("mongoose").DefaultSchemaOptions> & EnrolledCourse & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    updateEnrolledCourseByIdInDB: (enrolledCourseId: string, updatedData: Partial<EnrolledCourse>) => Promise<(import("mongoose").Document<unknown, {}, EnrolledCourse, {}, import("mongoose").DefaultSchemaOptions> & EnrolledCourse & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteEnrolledCourseByIdFromDB: (courseId: string) => Promise<{}>;
    getMyEnrolledCoursesFromDB: (user: TokenPayloadType, query?: Record<string, unknown>) => Promise<{
        meta: import("../../builder/queryBuilder.js").PaginationMeta;
        enrolledCourses: EnrolledCourse[];
    }>;
};
//# sourceMappingURL=enrolledCourse.service.d.ts.map