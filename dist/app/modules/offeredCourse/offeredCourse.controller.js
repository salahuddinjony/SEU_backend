import AppError from "../../errors/handleAppError.js";
import sendResponse from "../../utils/response/responseSend.js";
import catchAsync from "../../utils/CatchAsync.js";
import { checkCommonValidation } from "../../utils/checkCommonValidation.js";
import { OfferedCourseService } from "./offeredCourse.service.js";
const createOfferedCourse = catchAsync(async (req, res, next) => {
    const offeredCourseData = req.body; // Get course data from the request body
    const result = await OfferedCourseService.createOfferedCourseIntoDB(offeredCourseData);
    if (result) {
        // Check if result is not null or undefined
        sendResponse(res, {
            statusCode: 201,
            success: true,
            message: "Offered course created successfully",
            data: result,
        });
    }
    else {
        next(new AppError("Failed to create offered course", 404));
    }
});
// get all users-GET
const getMyOfferedCourses = catchAsync(async (req, res, next) => {
    const user = req.user;
    console.log("user", user);
    const query = req.query;
    const result = await OfferedCourseService.getMyOfferedCoursesFromDB(query, user);
    if (result) {
        // Check if result is not null or undefined
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Offered courses retrieved successfully",
            data: result,
        });
    }
    else {
        next(new AppError("Failed to retrieve offered courses", 404));
    }
});
// get user by ID-GET
const getOfferedCourseById = catchAsync(async (req, res, next) => {
    const courseId = checkCommonValidation.validateId(req.params.id, next);
    const result = await OfferedCourseService.getSingleOfferedCourseByIdFromDB(courseId);
    if (result) {
        // Check if result is not null or undefined
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Offered course retrieved successfully",
            data: result,
        });
    }
    else {
        next(new AppError("Offered course not found", 404));
    }
});
// update user info-PUT
const updateOfferedCourseInfo = catchAsync(async (req, res, next) => {
    const courseId = checkCommonValidation.validateId(req.params.id, next);
    const updatedData = req.body; // Get updated course data from the request body
    const result = await OfferedCourseService.updateOfferedCourseByIdInDB(courseId, updatedData);
    if (result) {
        // Check if result is not null or undefined
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Offered course updated successfully",
            data: result,
        });
    }
    else {
        next(new AppError("Offered course not found", 404));
    }
});
// delete user-DELETE
const deleteOfferedCourseById = catchAsync(async (req, res, next) => {
    const courseId = checkCommonValidation.validateId(req.params.id, next);
    const result = await OfferedCourseService.deleteOfferedCourseByIdInDB(courseId);
    if (result) {
        // Check if result is not null or undefined
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Offered course deleted successfully",
            data: result,
        });
    }
    else {
        next(new AppError("Offered course not found", 404));
    }
});
export const OfferedCourseController = {
    createOfferedCourse,
    getMyOfferedCourses,
    getOfferedCourseById,
    updateOfferedCourseInfo,
    deleteOfferedCourseById,
};
//# sourceMappingURL=offeredCourse.controller.js.map