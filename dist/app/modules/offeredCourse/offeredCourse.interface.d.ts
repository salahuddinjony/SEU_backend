import { Types } from "mongoose";
export type daysOfWeek = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
export type offeredCourse = {
    semseterRegistration: Types.ObjectId;
    academicDepartment: Types.ObjectId;
    course: Types.ObjectId;
    faculty: Types.ObjectId;
    maxCapacity: number;
    section: string;
    days: daysOfWeek[];
    startDate: Date;
    endDate: Date;
    isDeleted: boolean;
};
//# sourceMappingURL=offeredCourse.interface.d.ts.map