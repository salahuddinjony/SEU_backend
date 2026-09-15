import { offeredCourse } from "./offeredCourse.interface.js";
import { Types } from "mongoose";
import { TokenPayloadType } from "../../utils/commonTypes/types.js";
export declare const OfferedCourseService: {
    createOfferedCourseIntoDB: (payload: offeredCourse) => Promise<import("mongoose").Document<unknown, {}, offeredCourse, {}, import("mongoose").DefaultSchemaOptions> & offeredCourse & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getMyOfferedCoursesFromDB: (query: Record<string, unknown> | undefined, user: TokenPayloadType) => Promise<{
        meta: any;
        offeredCourses: any;
    }>;
    getSingleOfferedCourseByIdFromDB: (id: string) => Promise<(import("mongoose").Document<unknown, {}, offeredCourse, {}, import("mongoose").DefaultSchemaOptions> & offeredCourse & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updateOfferedCourseByIdInDB: (id: string, updatedData: Partial<offeredCourse>) => Promise<(import("mongoose").Document<unknown, {}, offeredCourse, {}, import("mongoose").DefaultSchemaOptions> & offeredCourse & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteOfferedCourseByIdInDB: (id: string) => Promise<(import("mongoose").Document<unknown, {}, offeredCourse, {}, import("mongoose").DefaultSchemaOptions> & offeredCourse & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
};
//# sourceMappingURL=offeredCourse.service.d.ts.map