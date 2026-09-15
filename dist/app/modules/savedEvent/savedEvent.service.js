import { Types } from "mongoose";
import AppError from "../../errors/handleAppError.js";
import { EventModel } from "../event/event.model.js";
import { SavedEventModel } from "./savedEvent.model.js";
const save = async (eventId, userId) => {
    if (!Types.ObjectId.isValid(eventId))
        throw new AppError("Invalid event id", 400);
    const event = await EventModel.findOne({ _id: eventId, isDeleted: false });
    if (!event)
        throw new AppError("Event not found", 404);
    try {
        return await SavedEventModel.create({ event: event._id, user: userId });
    }
    catch (error) {
        if (error.code === 11000) {
            throw new AppError("You already saved this event", 409);
        }
        throw error;
    }
};
const remove = async (eventId, userId) => {
    if (!Types.ObjectId.isValid(eventId))
        throw new AppError("Invalid event id", 400);
    const savedEvent = await SavedEventModel.findOneAndDelete({ event: eventId, user: userId });
    if (!savedEvent)
        throw new AppError("Saved event not found", 404);
    return savedEvent;
};
const listMine = (userId) => SavedEventModel.find()
    .where({ user: userId })
    .populate({ path: "event", match: { isDeleted: false } })
    .sort({ savedAt: -1 });
const getMineById = async (eventId, userId) => {
    if (!Types.ObjectId.isValid(eventId))
        throw new AppError("Invalid event id", 400);
    const savedEvent = await SavedEventModel.findOne({ event: eventId, user: userId })
        .populate({ path: "event", match: { isDeleted: false } });
    if (!savedEvent || !savedEvent.event)
        throw new AppError("Saved event not found", 404);
    return savedEvent;
};
export const SavedEventService = { save, remove, listMine, getMineById };
//# sourceMappingURL=savedEvent.service.js.map