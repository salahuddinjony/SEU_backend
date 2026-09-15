import { z } from "zod";
export const eventRegistrationValidation = z.object({
    eventId: z.string().min(1),
});
//# sourceMappingURL=eventRegistration.validation.js.map