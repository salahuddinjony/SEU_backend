import z from 'zod';
export declare const academicFacultyValidations: {
    academicFacultyValidationSchema: z.ZodObject<{
        name: z.ZodString;
    }, z.z.core.$strict>;
    updateAcademicFacultyValidationSchema: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strict>;
};
//# sourceMappingURL=academicFaculty.validation.d.ts.map