import { model, Schema } from "mongoose";
const adSchema = new Schema({
    title: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    link: { type: String, required: true, trim: true },
    isDeleted: { type: Boolean, default: false, select: false },
}, { timestamps: true, versionKey: false });
export const AdModel = model("Ad", adSchema);
//# sourceMappingURL=ad.model.js.map