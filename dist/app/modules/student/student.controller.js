import { StudentService } from "./student.service.js";
import AppError from "../../errors/handleAppError.js";
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary.js";
import sendResponse from "../../utils/response/responseSend.js";
import catchAsync from "../../utils/CatchAsync.js";
import { checkCommonValidation } from "../../utils/checkCommonValidation.js";
// Get all students-GET
const getAllStudents = catchAsync(async (req, res, next) => {
    const query = req.query;
    // console.log("test user", req.user);
    // console.log("iat", req.user.iat);
    // console.log("Cookie:", req.cookies);
    const result = await StudentService.getAllStudentsFromDB(query);
    if (result) {
        // Check if result is not null or undefined
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Students retrieved successfully",
            data: result,
        });
    }
    else {
        next(new AppError("Failed to retrieve students", 404));
    }
});
// Get all deleted students-GET
const getAllDeletedStudents = catchAsync(async (req, res, next) => {
    const result = await StudentService.getAllDeletedStudentsFromDB();
    if (result) {
        // Check if result is not null or undefined
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Students retrieved successfully",
            data: result,
        });
    }
    else {
        next(new AppError("Failed to retrieve students", 404));
    }
});
// Get student by ID-GET
const getStudentById = catchAsync(async (req, res, next) => {
    const studentId = checkCommonValidation.validateId(req.params.id, next);
    const result = await StudentService.getStudentByIdFromDB(studentId);
    if (result) {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Student retrieved successfully",
            data: result,
        });
    }
    else {
        next(new AppError("Student not found", 404));
    }
});
// update student-PATCH
const updateStudentInfo = catchAsync(async (req, res, next) => {
    const studentId = checkCommonValidation.validateId(req.params.id, next);
    const file = req.file;
    let updatedData = { ...req.body.student };
    if (Object.keys(updatedData).length === 0 && !file) {
        next(new AppError("Provide at least one student field to update or a profile image file", 400));
        return;
    }
    if (file) {
        const imageName = `${studentId}-profile`;
        const { secure_url } = (await sendImageToCloudinary(file.path, imageName));
        updatedData = { ...updatedData, profileImage: secure_url };
    }
    const result = await StudentService.updateStudentInfoInDB(studentId, updatedData);
    if (result) {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Student updated successfully",
            data: result,
        });
    }
    else {
        next(new AppError("Student not found", 404)); // Pass an error to the global error handler
    }
});
// delete student-DELETE
const deleteStudent = catchAsync(async (req, res, next) => {
    const studentId = checkCommonValidation.validateId(req.params.id, next);
    const result = await StudentService.deleteStudentFromDB(studentId);
    if (result) {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Student deleted successfully",
            data: result,
        });
    }
    else {
        next(new AppError("Student not found", 404)); // Pass an error to the global error handler
    }
});
// Restore deleted students if their admission semester is restored
const restoreDeletedStudents = catchAsync(async (req, res) => {
    const result = await StudentService.restoreDeletedStudentsInDB();
    if (result.count > 0) {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: result.message,
            data: result.students,
        });
    }
    else {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: result.message,
        });
    }
});
export const StudentController = {
    // createStudent,
    getAllStudents,
    getAllDeletedStudents,
    getStudentById,
    updateStudentInfo,
    deleteStudent,
    restoreDeletedStudents,
};
//# sourceMappingURL=student.controller.js.map