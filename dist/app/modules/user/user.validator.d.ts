import z from "zod";
export declare const userValidations: {
    createUserValidationSchema: z.ZodObject<{
        password: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strict>;
    updateUserValidationSchema: z.ZodObject<{
        status: z.ZodEnum<{
            "in-progress": "in-progress";
            active: "active";
            inactive: "inactive";
            pending: "pending";
            blocked: "blocked";
        }>;
    }, z.z.core.$strict>;
    updateMyProfileValidationSchema: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        dateOfBirth: z.ZodOptional<z.z.ZodCoercedDate<unknown>>;
        phone: z.ZodOptional<z.ZodString>;
        gender: z.ZodOptional<z.ZodEnum<{
            male: "male";
            female: "female";
            other: "other";
        }>>;
        otherDetails: z.ZodOptional<z.ZodString>;
        profileImage: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"__uploaded__">]>>;
    }, z.z.core.$strict>;
    createStudentPayloadSchema: z.ZodObject<{
        password: z.ZodOptional<z.ZodString>;
        student: z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            email: z.ZodString;
            admissionSemester: z.ZodOptional<z.ZodString>;
            academicDept: z.ZodOptional<z.ZodString>;
        }, z.z.core.$loose>;
    }, z.z.core.$strict>;
};
//# sourceMappingURL=user.validator.d.ts.map