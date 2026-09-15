import z from "zod";
export declare const offeredCourseValidationSchema: {
    offeredCourseValidation: z.ZodObject<{
        semseterRegistration: z.ZodString;
        academicDepartment: z.ZodString;
        course: z.ZodString;
        faculty: z.ZodString;
        maxCapacity: z.ZodNumber;
        section: z.ZodString;
        days: z.ZodArray<z.ZodString>;
        startDate: z.z.ZodCoercedDate<unknown>;
        endDate: z.z.ZodCoercedDate<unknown>;
    }, z.z.core.$strict>;
    updateOfferedCourseValidation: z.ZodObject<{
        faculty: z.ZodOptional<z.ZodString>;
        maxCapacity: z.ZodOptional<z.ZodNumber>;
        section: z.ZodOptional<z.ZodString>;
        days: z.ZodOptional<z.ZodArray<z.ZodString>>;
        startDate: z.ZodOptional<z.z.ZodCoercedDate<unknown>>;
        endDate: z.ZodOptional<z.z.ZodCoercedDate<unknown>>;
    }, z.z.core.$strict>;
};
//# sourceMappingURL=offeredCourse.validation.d.ts.map