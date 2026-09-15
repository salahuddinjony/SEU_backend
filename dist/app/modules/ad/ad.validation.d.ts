import { z } from "zod";
export declare const createAdValidation: z.ZodObject<{
    title: z.ZodString;
    link: z.ZodURL;
}, z.core.$strip>;
export declare const updateAdValidation: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    link: z.ZodOptional<z.ZodURL>;
}, z.core.$strip>;
//# sourceMappingURL=ad.validation.d.ts.map