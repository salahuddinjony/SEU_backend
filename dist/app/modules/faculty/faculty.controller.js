import AppError from "../../errors/handleAppError.js";
import sendResponse from "../../utils/response/responseSend.js";
import catchAsync from "../../utils/CatchAsync.js";
import { checkCommonValidation } from "../../utils/checkCommonValidation.js";
import { FacultyService } from "./faculty.service.js";
import { UserService } from "../user/user.service.js";
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary.js";
const createFaculty = catchAsync(async (req, res, next) => {
    // console.log(req.file);
    // console.log(req.body);
    const { password, facultyData } = req.body;
    if (!facultyData || typeof facultyData !== "object") {
        next(new AppError("Faculty payload is required", 400));
        return;
    }
    const result = await UserService.createFacultyIntoDB(password, facultyData, req.file);
    if (!result)
        return next(new AppError("Failed to create faculty", 404));
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Faculty created successfully",
        data: result,
    });
});
const getAllFaculties = catchAsync(async (req, res, next) => {
    const result = await FacultyService.getAllFacultiesFromDB(req.query);
    if (!result)
        return next(new AppError("Failed to get faculties", 404));
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Faculties retrieved successfully",
        data: result,
    });
});
const getFacultyById = catchAsync(async (req, res, next) => {
    const id = checkCommonValidation.validateId(req.params.id, next);
    const result = await FacultyService.getFacultyByIdFromDB(id);
    if (!result)
        return next(new AppError("Faculty not found", 404));
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Faculty retrieved successfully",
        data: result,
    });
});
const updateFacultyById = catchAsync(async (req, res, next) => {
    const id = checkCommonValidation.validateId(req.params.id, next);
    const file = req.file;
    let updatedData = { ...req.body.faculty };
    if (Object.keys(updatedData).length === 0 && !file) {
        next(new AppError("Provide at least one faculty field to update or a profile image file", 400));
        return;
    }
    if (file) {
        const imageName = `${id}-profile`;
        const { secure_url } = (await sendImageToCloudinary(file.path, imageName));
        updatedData = { ...updatedData, profileImage: secure_url };
    }
    const result = await FacultyService.updateFacultyByIdInDB(id, updatedData);
    if (!result)
        return next(new AppError("Faculty not found", 404));
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Faculty updated successfully",
        data: result,
    });
});
const deleteFacultyById = catchAsync(async (req, res, next) => {
    const id = checkCommonValidation.validateId(req.params.id, next);
    const result = await FacultyService.deleteFacultyByIdInDB(id);
    if (!result)
        return next(new AppError("Faculty not found", 404));
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Faculty deleted successfully",
        data: result,
    });
});
export const FacultyController = {
    createFaculty,
    getAllFaculties,
    getFacultyById,
    updateFacultyById,
    deleteFacultyById,
};
//# sourceMappingURL=faculty.controller.js.map