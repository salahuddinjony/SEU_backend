import { z } from "zod";
export declare const createAdminValidation: z.ZodObject<{
    password: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=portal.validation.d.ts.map