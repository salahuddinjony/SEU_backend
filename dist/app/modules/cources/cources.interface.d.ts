import { Types } from "mongoose";
export type prerequisiteCourse = {
    course: Types.ObjectId;
    isDeleted: boolean;
};
export type Course = {
    title: string;
    prefix: string;
    code: string;
    credit: number;
    prerequisiteCources?: prerequisiteCourse[];
    isDeleted?: boolean;
};
export type assignCourcesToFaculties = {
    courseId: Types.ObjectId;
    faculties: Types.ObjectId[];
};
//# sourceMappingURL=cources.interface.d.ts.map