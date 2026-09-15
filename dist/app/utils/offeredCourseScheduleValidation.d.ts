import type { offeredCourse } from "../modules/offeredCourse/offeredCourse.interface.js";
export type SemesterRegistrationWindow = {
    startDate: Date;
    endDate: Date;
};
export declare const isDateRangeOverlapped: (startA: Date, endA: Date, startB: Date, endB: Date) => boolean;
export declare const assertOfferedCourseDatesWithinSemester: (startDate: Date, endDate: Date, semesterReg: SemesterRegistrationWindow) => void;
export type FacultyScheduleConflictParams = {
    semseterRegistration: offeredCourse["semseterRegistration"];
    faculty: offeredCourse["faculty"];
    startDate: Date;
    endDate: Date;
    days: offeredCourse["days"];
    excludeOfferedCourseId?: string;
};
export declare const assertNoFacultyScheduleConflict: (params: FacultyScheduleConflictParams) => Promise<void>;
//# sourceMappingURL=offeredCourseScheduleValidation.d.ts.map