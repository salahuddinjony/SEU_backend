import AppError from "../errors/handleAppError.js";
import { OfferedCourseModel } from "../modules/offeredCourse/offeredCourse.model.js";
export const isDateRangeOverlapped = (startA, endA, startB, endB) => startA <= endB && endA >= startB;
export const assertOfferedCourseDatesWithinSemester = (startDate, endDate, semesterReg) => {
    if (endDate <= startDate) {
        throw new AppError("End Date must be after Start Date", 400);
    }
    if (startDate < semesterReg.startDate || endDate > semesterReg.endDate) {
        throw new AppError("Offered course dates must be within the semester registration period", 400);
    }
};
export const assertNoFacultyScheduleConflict = async (params) => {
    const { semseterRegistration, faculty, startDate, endDate, days, excludeOfferedCourseId, } = params;
    const facultyOfferedCourses = await OfferedCourseModel.find({
        semseterRegistration,
        faculty,
        isDeleted: false,
        ...(excludeOfferedCourseId ? { _id: { $ne: excludeOfferedCourseId } } : {}),
    }).select("startDate endDate days");
    const hasFacultyScheduleConflict = facultyOfferedCourses.some((course) => {
        const hasDayOverlap = days.some((day) => course.days.includes(day));
        const hasDateOverlap = isDateRangeOverlapped(startDate, endDate, course.startDate, course.endDate);
        return hasDayOverlap && hasDateOverlap;
    });
    if (hasFacultyScheduleConflict) {
        throw new AppError("Faculty already has an offered course in the same date range and day(s)", 400);
    }
};
//# sourceMappingURL=offeredCourseScheduleValidation.js.map