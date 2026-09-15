import { model, Schema } from "mongoose";
const eventSchema = new Schema({
    title: { type: String, trim: true },
    description: { type: String, trim: true },
    image: { type: String, trim: true },
    date: { type: Date },
    isDeleted: { type: Boolean, default: false, select: false },
}, { timestamps: true });
export const EventModel = model("Event", eventSchema);
//# sourceMappingURL=event.model.js.map