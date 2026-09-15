import catchAsync from "../../utils/CatchAsync.js";
import sendResponse from "../../utils/response/responseSend.js";
import { EventRegistrationService } from "./eventRegistration.service.js";
const register = catchAsync(async (req, res) => {
    const result = await EventRegistrationService.register(req.body.eventId, String(req.user._id));
    sendResponse(res, { statusCode: 201, success: true, message: "Registered for event", data: { data: result } });
});
const cancel = catchAsync(async (req, res) => {
    const result = await EventRegistrationService.cancel(req.params.eventId, String(req.user._id));
    sendResponse(res, { statusCode: 200, success: true, message: "Registration cancelled", data: { data: result } });
});
const listMine = catchAsync(async (req, res) => {
    const eventId = typeof req.query.eventId === "string" ? req.query.eventId : undefined;
    const result = await EventRegistrationService.listMine(String(req.user._id), eventId);
    sendResponse(res, { statusCode: 200, success: true, message: "Your registrations retrieved", data: { data: result } });
});
const listAll = catchAsync(async (req, res) => {
    const eventId = typeof req.query.eventId === "string" ? req.query.eventId : undefined;
    const result = await EventRegistrationService.listAll(eventId);
    sendResponse(res, { statusCode: 200, success: true, message: "Event registrations retrieved", data: { data: result } });
});
const listByEvent = catchAsync(async (req, res) => {
    const result = await EventRegistrationService.listByEvent(req.params.eventId);
    sendResponse(res, { statusCode: 200, success: true, message: "Event registrations retrieved", data: { data: result } });
});
const dashboard = catchAsync(async (_req, res) => {
    const result = await EventRegistrationService.dashboard();
    sendResponse(res, { statusCode: 200, success: true, message: "Dashboard retrieved", data: { data: result } });
});
export const EventRegistrationController = { register, cancel, listMine, listAll, listByEvent, dashboard };
//# sourceMappingURL=eventRegistration.controller.js.map