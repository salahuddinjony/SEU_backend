export const calculateGrade = (totalMarks) => {
    if (totalMarks <= 0)
        return "N/A";
    if (totalMarks >= 80)
        return "A+";
    if (totalMarks >= 70)
        return "A";
    if (totalMarks >= 60)
        return "A-";
    if (totalMarks >= 50)
        return "B";
    if (totalMarks >= 40)
        return "C";
    if (totalMarks >= 33)
        return "D";
    return "F";
};
// CGPA-style point mapping on a 4.00 scale
export const calculateGradePoints = (totalMarks) => {
    if (totalMarks <= 0)
        return 0;
    if (totalMarks >= 80)
        return 4.0;
    if (totalMarks >= 70)
        return 3.75;
    if (totalMarks >= 60)
        return 3.5;
    if (totalMarks >= 50)
        return 3.0;
    if (totalMarks >= 40)
        return 2.5;
    if (totalMarks >= 33)
        return 2.0;
    return 0;
};
export const calculateStatus = (grade) => {
    if (grade === "N/A")
        return "N/A";
    return grade === "F" ? "FAIL" : "PASS";
};
export const mergeAssessmentMarks = (existingMarks, incomingMarks) => ({
    classTest1: incomingMarks.classTest1 ?? existingMarks.classTest1,
    midTerm: incomingMarks.midTerm ?? existingMarks.midTerm,
    classTest2: incomingMarks.classTest2 ?? existingMarks.classTest2,
    finalExam: incomingMarks.finalExam ?? existingMarks.finalExam,
});
export const areAllAssessmentsAvailable = (marks) => [marks.classTest1, marks.midTerm, marks.classTest2, marks.finalExam].every((mark) => mark > 0);
export const calculateTotalMarks = (marks) => marks.classTest1 + marks.midTerm + marks.classTest2 + marks.finalExam;
export const evaluateCourseMarks = (marks) => {
    const total = calculateTotalMarks(marks);
    const hasAllTestMarks = areAllAssessmentsAvailable(marks);
    if (!hasAllTestMarks) {
        return {
            total,
            grade: "N/A",
            gradePoints: 0,
            status: "N/A",
            isCourseCompleted: false,
        };
    }
    //when all the assessments are available, we can calculate the grade, grade points and status
    const grade = calculateGrade(total);
    const gradePoints = calculateGradePoints(total);
    const status = calculateStatus(grade);
    return {
        total,
        grade,
        gradePoints,
        status,
        isCourseCompleted: grade !== "N/A" && status !== "FAIL",
    };
};
//# sourceMappingURL=enrolledCourse.marksCalculation.js.map