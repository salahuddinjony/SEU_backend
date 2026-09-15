import catchAsync from "../../utils/CatchAsync.js";
import { AcademicSemesterService } from "./academicSemester.service.js";
import sendResponse from "../../utils/response/responseSend.js";
import AppError from "../../errors/handleAppError.js";
import { checkCommonValidation } from "../../utils/checkCommonValidation.js";
//  create semester-POST
const createSemester = catchAsync(async (req, res, next) => {
    const result = await AcademicSemesterService.createSemesterIntoDB(req.body);
    if (result) { // Check if result is not null or undefined
        sendResponse(res, {
            statusCode: 201,
            success: true,
            message: 'Academic semester created successfully',
            data: result
        });
    }
    else {
        next(new AppError('Failed to create academic semester', 404));
    }
});
// get all semesters-GET
const getAllSemesters = catchAsync(async (req, res, next) => {
    const query = req.query;
    const result = await AcademicSemesterService.getAllSemestersFromDB(query);
    if (result) { // Check if result is not null or undefined
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Academic semesters retrieved successfully',
            data: result
        });
    }
    else {
        next(new AppError('Failed to retrieve academic semesters', 404));
    }
});
// get all delete semesters-GET
const getAllDeletedSemesters = catchAsync(async (req, res, next) => {
    const result = await AcademicSemesterService.getAllDeletedSemestersFromDB();
    if (result) { // Check if result is not null or undefined
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Academic semesters retrieved successfully',
            data: result
        });
    }
    else {
        next(new AppError('Failed to retrieve academic semesters', 404));
    }
});
// get single semester by id-GET
const getSemesterById = catchAsync(async (req, res, next) => {
    const id = checkCommonValidation.validateId(req.params.id, next);
    const result = await AcademicSemesterService.getSemesterByIdFromDB(id);
    if (result) { // Check if result is not null or undefined
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Academic semester retrieved successfully',
            data: result
        });
    }
    else {
        next(new AppError('Academic semester not found', 404));
    }
});
// update semester info-PATCH
const updateSemesterInfo = catchAsync(async (req, res, next) => {
    const id = checkCommonValidation.validateId(req.params.id, next);
    const updatedData = req.body;
    const result = await AcademicSemesterService.updateSemesterInfoInDB(id, updatedData);
    if (result) { // Check if result is not null or undefined
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Academic semester updated successfully',
            data: result
        });
    }
    else {
        next(new AppError('Failed to update academic semester', 404));
    }
});
// delete semester-DELETE
const deleteSemester = catchAsync(async (req, res, next) => {
    const id = checkCommonValidation.validateId(req.params.id, next);
    const result = await AcademicSemesterService.deleteSemesterFromDB(id);
    if (result) { // Check if result is not null or undefined
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Academic semester deleted successfully',
            data: result
        });
    }
    else {
        next(new AppError('Failed to delete academic semester', 404));
    }
});
// restore deleted semesters
const restoreDeletedSemesters = catchAsync(async (req, res, next) => {
    const result = await AcademicSemesterService.restoreDeletedSemestersInDB();
    if (result) { // Check if result is not null or undefined
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Deleted academic semesters restored successfully',
            data: result
        });
    }
    else if (result === null) {
        next(new AppError('There are no deleted academic semesters to restore', 404));
    }
    else {
        next(new AppError('Failed to restore deleted academic semesters', 404));
    }
});
export const AcademicSemesterController = {
    createSemester,
    getAllDeletedSemesters,
    getAllSemesters,
    getSemesterById,
    updateSemesterInfo,
    deleteSemester,
    restoreDeletedSemesters
};
//# sourceMappingURL=academicSemester.controller.js.map