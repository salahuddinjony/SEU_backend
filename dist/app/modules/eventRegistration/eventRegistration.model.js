import { Schema, model } from "mongoose";
const registrationSchema = new Schema({
    event: { type: Schema.Types.ObjectId, ref: "Event", required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    registeredAt: { type: Date, default: Date.now },
}, { timestamps: true });
registrationSchema.index({ event: 1, user: 1 }, { unique: true });
export const EventRegistrationModel = model("EventRegistration", registrationSchema);
//# sourceMappingURL=eventRegistration.model.js.map