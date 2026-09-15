import z from "zod";
export declare const enrolledCourseValidation: {
    createEnrolledCourseValidationSchema: z.ZodObject<{
        offeredCourse: z.ZodString;
    }, z.z.core.$strict>;
    updateEnrolledCourseValidationSchema: z.ZodObject<{
        semesterRegistration: z.ZodString;
        offeredCourse: z.ZodString;
        student: z.ZodString;
        courseMarks: z.ZodOptional<z.ZodObject<{
            classTest1: z.ZodOptional<z.ZodNumber>;
            midTerm: z.ZodOptional<z.ZodNumber>;
            classTest2: z.ZodOptional<z.ZodNumber>;
            finalExam: z.ZodOptional<z.ZodNumber>;
        }, z.z.core.$strict>>;
    }, z.z.core.$strict>;
};
//# sourceMappingURL=enrolledCourse.validation.d.ts.map