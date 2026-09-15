import { Schema, model } from "mongoose";
const savedEventSchema = new Schema({
    event: { type: Schema.Types.ObjectId, ref: "Event", required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    savedAt: { type: Date, default: Date.now },
}, { timestamps: true });
savedEventSchema.index({ event: 1, user: 1 }, { unique: true });
export const SavedEventModel = model("SavedEvent", savedEventSchema);
//# sourceMappingURL=savedEvent.model.js.map