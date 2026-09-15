import { Types } from "mongoose";
import AppError from "../../errors/handleAppError.js";
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary.js";
import { EventModel } from "./event.model.js";
const create = async (payload, createdBy, imagePath) => {
    let image = payload.image;
    if (imagePath) {
        const result = (await sendImageToCloudinary(imagePath, `event-${Date.now()}`));
        image = result.secure_url;
    }
    return EventModel.create({
        ...payload,
        ...(image ? { image: String(image) } : {}),
        createdBy: new Types.ObjectId(createdBy),
    });
};
const list = async () => EventModel.find({ isDeleted: false }).sort({ date: 1 });
const getById = async (id) => EventModel.findOne({ _id: id, isDeleted: false });
const update = async (id, payload, imagePath) => {
    let image = payload.image;
    if (imagePath) {
        const result = (await sendImageToCloudinary(imagePath, `event-${id}-${Date.now()}`));
        image = result.secure_url;
    }
    const event = await EventModel.findOneAndUpdate({ _id: id, isDeleted: false }, { ...payload, ...(image ? { image: String(image) } : {}) }, { new: true });
    if (!event)
        throw new AppError("Event not found", 404);
    return event;
};
const remove = async (id) => {
    const event = await EventModel.findOneAndUpdate({ _id: id, isDeleted: false }, { isDeleted: true }, { new: true });
    if (!event)
        throw new AppError("Event not found", 404);
    return event;
};
export const EventService = { create, list, getById, update, remove };
//# sourceMappingURL=event.service.js.map