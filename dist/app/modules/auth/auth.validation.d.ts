import { z } from "zod";
export declare const AuthValidation: {
    registerValidation: z.ZodObject<{
        password: z.ZodString;
        name: z.ZodString;
        email: z.ZodString;
        dateOfBirth: z.ZodOptional<z.ZodCoercedDate<unknown>>;
        phone: z.ZodString;
        gender: z.ZodEnum<{
            male: "male";
            female: "female";
            other: "other";
        }>;
        otherDetails: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    authLoginValidation: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        password: z.ZodString;
    }, z.core.$strict>;
    changePasswordValidation: z.ZodObject<{
        oldPassword: z.ZodString;
        newPassword: z.ZodString;
    }, z.core.$strict>;
    refreshTokenValidation: z.ZodObject<{
        refreshToken: z.ZodString;
    }, z.core.$strip>;
    forgetPasswordValidation: z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strict>;
    resetPasswordValidation: z.ZodObject<{
        id: z.ZodString;
        newPassword: z.ZodString;
    }, z.core.$strict>;
};
//# sourceMappingURL=auth.validation.d.ts.map