import { assignCourcesToFaculties, Course } from "./cources.interface.js";
export declare const CourseModel: import("mongoose").Model<Course, {}, {}, {}, import("mongoose").Document<unknown, {}, Course, {}, import("mongoose").DefaultSchemaOptions> & Course & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, Course>;
export declare const AssignCourcesToFacultiesModel: import("mongoose").Model<assignCourcesToFaculties, {}, {}, {}, import("mongoose").Document<unknown, {}, assignCourcesToFaculties, {}, import("mongoose").DefaultSchemaOptions> & assignCourcesToFaculties & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, assignCourcesToFaculties>;
//# sourceMappingURL=cources.model.d.ts.map