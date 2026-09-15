import { z } from "zod";
export declare const semisterRegisterationValidationSchema: {
    semisterRegisterationValidation: z.ZodObject<{
        academicSemester: z.ZodString;
        status: z.ZodEnum<{
            UPCOMING: "UPCOMING";
            ONGOING: "ONGOING";
            COMPLETED: "COMPLETED";
        }>;
        startDate: z.ZodCoercedDate<unknown>;
        endDate: z.ZodCoercedDate<unknown>;
    }, z.core.$strict>;
    semisterRegisterationUpdateValidation: z.ZodObject<{
        academicSemester: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodEnum<{
            UPCOMING: "UPCOMING";
            ONGOING: "ONGOING";
            COMPLETED: "COMPLETED";
        }>>;
        startDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
        endDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    }, z.core.$strict>;
};
//# sourceMappingURL=semisterRegistration.validation.d.ts.map