import AppError from "../../errors/handleAppError.js";
import sendResponse from "../../utils/response/responseSend.js";
import catchAsync from "../../utils/CatchAsync.js";
import { checkCommonValidation } from "../../utils/checkCommonValidation.js";
import { AdminService } from "./admin.service.js";
import { UserService } from "../user/user.service.js";
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary.js";
// Controller function to handle creating an admin
const CreateAdmin = catchAsync(async (req, res, next) => {
    const { password, adminData } = req.body; // Get admin data from the request body
    if (!adminData || typeof adminData !== "object") {
        next(new AppError("Admin payload is required", 400));
        return;
    }
    // Call the service function to create the admin in the database
    const result = await UserService.createAdminIntoDB(password, adminData, req.file);
    if (result) {
        // Check if result is not null or undefined
        sendResponse(res, {
            statusCode: 201,
            success: true,
            message: "Admin created successfully",
            data: result,
        });
    }
    else {
        next(new AppError("Failed to create admin", 404));
    }
});
// get all admins-GET
const getAllAdmins = catchAsync(async (req, res, next) => {
    const query = req.query;
    const result = await AdminService.getAllAdminsFromDB(query);
    if (result) {
        // Check if result is not null or undefined
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Admins retrieved successfully",
            data: result,
        });
    }
    else {
        next(new AppError("Failed to retrieve admins", 404));
    }
});
// get admin by ID-GET
const getAdminById = catchAsync(async (req, res, next) => {
    const adminId = checkCommonValidation.validateId(req.params.id, next);
    const result = await AdminService.getAdminByIdFromDB(adminId);
    if (result) {
        // Check if result is not null or undefined
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Admin retrieved successfully",
            data: result,
        });
    }
    else {
        next(new AppError("Failed to retrieve admin", 404));
    }
});
// update admin info-PUT
const updateAdminInfo = catchAsync(async (req, res, next) => {
    const adminId = checkCommonValidation.validateId(req.params.id, next);
    const file = req.file;
    let updatedData = { ...req.body.admin };
    if (Object.keys(updatedData).length === 0 && !file) {
        next(new AppError("Provide at least one admin field to update or a profile image file", 400));
        return;
    }
    if (file) {
        const imageName = `${adminId}-profile`;
        const { secure_url } = (await sendImageToCloudinary(file.path, imageName));
        updatedData = { ...updatedData, profileImage: secure_url };
    }
    const result = await AdminService.updateAdminInDB(adminId, updatedData);
    if (result) {
        // Check if result is not null or undefined
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Admin updated successfully",
            data: result,
        });
    }
    else {
        next(new AppError("Admin not found", 404));
    }
});
// delete admin-DELETE
const deleteAdmin = catchAsync(async (req, res, next) => {
    const adminId = checkCommonValidation.validateId(req.params.id, next);
    const result = await AdminService.deleteAdminFromDB(adminId);
    if (result) {
        // Check if result is not null or undefined
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Admin deleted successfully",
            data: result,
        });
    }
    else {
        next(new AppError("Admin not found", 404));
    }
});
export const AdminController = {
    CreateAdmin,
    getAllAdmins,
    getAdminById,
    updateAdminInfo,
    deleteAdmin,
};
//# sourceMappingURL=admin.controller.js.map