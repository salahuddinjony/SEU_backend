import AppError from "../../errors/handleAppError.js";
import { UserModel } from "../user/user.model.js";
import jwt from "jsonwebtoken";
import config from "../../config/index.js";
import bcrypt from "bcrypt";
import { sendMail } from "../../utils/sendMail.js";
const authLoginIntoDB = async (authData) => {
    const { id, email, password } = authData;
    try {
        const identifier = id ?? email;
        if (!identifier) {
            throw new AppError("User ID or email is required", 400);
        }
        const user = await UserModel.isUserIdValid(identifier, password);
        const accessToken = jwt.sign({ user }, config.JWT_SECRET, {
            expiresIn: config.JWT_EXPIRES_IN,
        });
        const refreshToken = jwt.sign({ user }, config.JWT_SECRET, {
            expiresIn: config.JWT_REFRESH_EXPIRES_IN,
        });
        return {
            accessToken,
            refreshToken,
            user,
        };
    }
    catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError(error instanceof Error ? error.message : "Something went wrong", 500);
    }
};
const changePasswordIntoDB = async (user, payload) => {
    await UserModel.isUserIdValid(user.id, payload.oldPassword);
    // check old and new password are not the same
    if (payload.oldPassword === payload.newPassword) {
        throw new AppError("Old and new password are the same!", 400);
    }
    // hash new password using bcrypt
    const newPassword = await bcrypt.hash(payload.newPassword, Number(config.BCRYPT_SALT_ROUNDS));
    const updatedUser = await UserModel.findByIdAndUpdate(user._id, {
        password: newPassword,
        needsPasswordReset: false,
        passwordChangedAt: new Date(),
    });
    return updatedUser;
};
// refresh token
const refreshTokenIntoDB = async (refreshToken) => {
    const decoded = jwt.verify(refreshToken, config.JWT_SECRET);
    const { user } = decoded;
    const isValidUser = await UserModel.isUserIdValid(user.id, undefined, false, false);
    if (!isValidUser) {
        throw new AppError("User not found", 404);
    }
    if (isValidUser.status !== "active") {
        throw new AppError("User is not active, please contact admin", 401);
    }
    if (UserModel.isPasswordChanged(isValidUser.passwordChangedAt, decoded.iat)) {
        throw new AppError("Password changed, please login again", 401);
    }
    const accessToken = jwt.sign({ user }, config.JWT_SECRET, {
        expiresIn: config.JWT_EXPIRES_IN,
    });
    return {
        accessToken,
    };
};
// forget password
const forgetPasswordIntoDB = async (id) => {
    const user = await UserModel.isUserIdValid(id, undefined, false, false);
    if (!user) {
        throw new AppError("User not found", 404);
    }
    if (user.status !== "active") {
        throw new AppError("User is not active, please contact admin", 401);
    }
    // console.log(isValidUser);
    // generate token
    const resetPasswordToken = jwt.sign({ user }, config.JWT_SECRET, {
        expiresIn: "5m",
    });
    const name = user.email?.split("@")[0] || user.id;
    const url = `${config.FRONTEND_URL}/reset-password?id=${id}&token=${resetPasswordToken}`;
    try {
        // send email to user by using sendMail function of Nodemailer
        await sendMail(user.email, "Reset Password", name, url);
    }
    catch {
        throw new AppError("Unable to send reset email right now. Please check your email is valid", 503);
    }
    return {
        expiresIn: "5m",
        mailSent: true,
    };
};
// reset password
const resetPasswordIntoDB = async (payload, idFromToken) => {
    const { id, newPassword } = payload;
    console.log(idFromToken, id);
    // check if the given user id is the same as the user id from the token
    if (idFromToken !== id) {
        throw new AppError("Invalid Given User ID", 401);
    }
    const isValidUser = await UserModel.isUserIdValid(id, undefined, false, false);
    if (!isValidUser) {
        throw new AppError("User not found", 404);
    }
    const hashedNewPassword = await bcrypt.hash(newPassword, Number(config.BCRYPT_SALT_ROUNDS));
    await UserModel.findByIdAndUpdate(isValidUser._id, {
        password: hashedNewPassword,
        needsPasswordReset: false,
        passwordChangedAt: new Date(),
    });
    return {
        message: "Password reset successfully",
    };
};
export const AuthService = {
    authLoginIntoDB,
    changePasswordIntoDB,
    refreshTokenIntoDB,
    forgetPasswordIntoDB,
    resetPasswordIntoDB,
};
//# sourceMappingURL=auth.service.js.map