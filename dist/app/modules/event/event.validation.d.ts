import { z } from "zod";
export declare const eventValidation: {
    create: z.ZodObject<{
        title: z.ZodString;
        subtitle: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"__uploaded__">]>>;
        date: z.ZodCoercedDate<unknown>;
        location: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    update: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        subtitle: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        image: z.ZodOptional<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"__uploaded__">]>>>;
        date: z.ZodOptional<z.ZodCoercedDate<unknown>>;
        location: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>;
};
//# sourceMappingURL=event.validation.d.ts.map