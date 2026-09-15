import z from "zod";
export declare const courseValidation: {
    createCourseValidationSchema: z.ZodObject<{
        title: z.ZodString;
        prefix: z.ZodString;
        code: z.ZodString;
        credit: z.ZodNumber;
        prerequisiteCources: z.ZodOptional<z.ZodArray<z.ZodPipe<z.ZodObject<{
            course: z.ZodString;
            isDeleted: z.ZodOptional<z.ZodBoolean>;
            isdeleted: z.ZodOptional<z.ZodBoolean>;
        }, z.z.core.$strict>, z.ZodTransform<{
            isDeleted: boolean;
            course: string;
        }, {
            course: string;
            isDeleted?: boolean | undefined;
            isdeleted?: boolean | undefined;
        }>>>>;
    }, z.z.core.$strict>;
    updateCourseValidationSchema: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        prefix: z.ZodOptional<z.ZodString>;
        code: z.ZodOptional<z.ZodString>;
        credit: z.ZodOptional<z.ZodNumber>;
        prerequisiteCources: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodPipe<z.ZodObject<{
            course: z.ZodString;
            isDeleted: z.ZodOptional<z.ZodBoolean>;
            isdeleted: z.ZodOptional<z.ZodBoolean>;
        }, z.z.core.$strict>, z.ZodTransform<{
            isDeleted: boolean;
            course: string;
        }, {
            course: string;
            isDeleted?: boolean | undefined;
            isdeleted?: boolean | undefined;
        }>>>>>;
    }, z.z.core.$strict>;
    assignCourcesToFacultiesValidationSchema: z.ZodObject<{
        faculties: z.ZodArray<z.ZodString>;
    }, z.z.core.$strip>;
    unassignCourcesFromFacultiesValidationSchema: z.ZodObject<{
        faculties: z.ZodArray<z.ZodString>;
    }, z.z.core.$strip>;
};
//# sourceMappingURL=cources.validation.d.ts.map