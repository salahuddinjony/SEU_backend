import { z } from "zod";
export declare const createContactValidation: z.ZodObject<{
    label: z.ZodString;
    value: z.ZodString;
    type: z.ZodEnum<{
        other: "other";
        email: "email";
        phone: "phone";
        address: "address";
        website: "website";
        social: "social";
    }>;
    link: z.ZodOptional<z.ZodURL>;
    isActive: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
}, z.core.$strip>;
export declare const updateContactValidation: z.ZodObject<{
    label: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<{
        other: "other";
        email: "email";
        phone: "phone";
        address: "address";
        website: "website";
        social: "social";
    }>>;
    link: z.ZodOptional<z.ZodOptional<z.ZodURL>>;
    isActive: z.ZodOptional<z.ZodOptional<z.ZodCoercedBoolean<unknown>>>;
}, z.core.$strip>;
//# sourceMappingURL=contact.validation.d.ts.map