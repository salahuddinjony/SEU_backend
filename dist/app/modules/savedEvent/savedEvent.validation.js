import { z } from "zod";
export const savedEventValidation = z.object({
    eventId: z.string().min(1, "Event id is required"),
});
//# sourceMappingURL=savedEvent.validation.js.map