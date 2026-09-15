import { model, Schema } from "mongoose";
const contactSchema = new Schema({
    label: { type: String, required: true, trim: true },
    value: { type: String, required: true, trim: true },
    type: {
        type: String,
        enum: ["phone", "email", "address", "website", "social", "other"],
        required: true,
    },
    link: { type: String, trim: true },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false, select: false },
}, { timestamps: true, versionKey: false });
export const ContactModel = model("Contact", contactSchema);
//# sourceMappingURL=contact.model.js.map