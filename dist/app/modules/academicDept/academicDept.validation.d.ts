import { z } from 'zod';
export declare const academicDeptValidation: {
    CreateAcademicDept: z.ZodObject<{
        name: z.ZodString;
        academicFaculty: z.ZodString;
    }, z.core.$strict>;
    UpdateAcademicDept: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        academicFaculty: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
};
//# sourceMappingURL=academicDept.validation.d.ts.map