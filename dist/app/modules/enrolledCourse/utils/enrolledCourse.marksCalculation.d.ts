import { Grade } from "../enrolledCourse.interface.js";
export type FinalMarkedResult = {
    total: number;
    grade: Grade;
    gradePoints: number;
    status: "PASS" | "FAIL" | "N/A";
    isCourseCompleted: boolean;
};
type Assessments = Pick<import("../enrolledCourse.interface.js").CourseMarks, "classTest1" | "midTerm" | "classTest2" | "finalExam">;
export declare const calculateGrade: (totalMarks: number) => Grade;
export declare const calculateGradePoints: (totalMarks: number) => number;
export declare const calculateStatus: (grade: Grade) => "N/A" | "PASS" | "FAIL";
export declare const mergeAssessmentMarks: (existingMarks: Assessments, incomingMarks: Partial<Assessments>) => Assessments;
export declare const areAllAssessmentsAvailable: (marks: Assessments) => boolean;
export declare const calculateTotalMarks: (marks: Assessments) => number;
export declare const evaluateCourseMarks: (marks: Assessments) => FinalMarkedResult;
export {};
//# sourceMappingURL=enrolledCourse.marksCalculation.d.ts.map