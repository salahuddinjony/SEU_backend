import { Schema } from "mongoose";
import { CourseMarks, EnrolledCourse } from "./enrolledCourse.interface.js";
export declare const CourseMarksSchema: Schema<CourseMarks>;
export declare const EnrolledCourseModel: import("mongoose").Model<EnrolledCourse, {}, {}, {}, import("mongoose").Document<unknown, {}, EnrolledCourse, {}, import("mongoose").DefaultSchemaOptions> & EnrolledCourse & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, EnrolledCourse>;
//# sourceMappingURL=enrolledCourse.model.d.ts.map