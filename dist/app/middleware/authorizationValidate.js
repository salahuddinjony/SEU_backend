import catchAsync from "../utils/CatchAsync.js";
import AppError from "../errors/handleAppError.js";
import jwt from "jsonwebtoken";
import config from "../config/index.js";
import { UserModel } from "../modules/user/user.model.js";
// middleware to log incoming requests for debugging
const authorizationValidate = (...roles) => {
    return catchAsync(async (req, _res, next) => {
        // its take token from the header and split it by space and take the second element for Bearer Token
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            throw new AppError("Unauthorized", 401);
        }
        //   console.log("Token:", token);
        const decoded = jwt.verify(token, config.JWT_SECRET);
        const { id, role } = decoded.user;
        // iat/exp live on the JWT root;
        const iat = decoded.iat;
        const isValidUser = await UserModel.isUserIdValid(id, undefined, // password is not required for this check
        false, // check password is not required for this check
        false);
        // check user exists
        if (!isValidUser) {
            throw new AppError("User not found", 404);
        }
        // check status
        if (isValidUser.status !== "active") {
            throw new AppError("User is not active, please contact admin", 401);
        }
        // check password change (invalidate old tokens)
        if (UserModel.isPasswordChanged(isValidUser.passwordChangedAt, iat)) {
            throw new AppError("Password changed, please login again", 401);
        }
        // finally check role
        if (!roles.includes(role)) {
            throw new AppError("You are not authorized to access this resource", 403);
        }
        req.user = isValidUser;
        // req.user.iat=iat as number;
        return next();
    });
};
export default authorizationValidate;
//# sourceMappingURL=authorizationValidate.js.map