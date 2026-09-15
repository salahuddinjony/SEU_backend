import { z } from "zod";
const eventPayload = z.object({
    title: z.string().min(1),
    subtitle: z.string().optional(),
    image: z.string().url().or(z.literal("__uploaded__")).optional(),
    date: z.coerce.date(),
    location: z.string().min(1),
    description: z.string().optional(),
});
export const eventValidation = {
    create: eventPayload,
    update: eventPayload.partial().refine((value) => Object.keys(value).length > 0, "At least one field is required"),
};
//# sourceMappingURL=event.validation.js.map