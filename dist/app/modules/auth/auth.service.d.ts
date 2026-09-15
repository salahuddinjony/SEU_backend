import { Auth } from "./auth.interface.js";
import { UserInterface } from "../user/user.interface.js";
import type { Types } from "mongoose";
import { TokenPayloadType } from "../../utils/commonTypes/types.js";
export declare const AuthService: {
    authLoginIntoDB: (authData: Auth) => Promise<{
        accessToken: string;
        refreshToken: string;
        user: Partial<UserInterface>;
    }>;
    changePasswordIntoDB: (user: TokenPayloadType, payload: {
        oldPassword: string;
        newPassword: string;
    }) => Promise<(import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    refreshTokenIntoDB: (refreshToken: string) => Promise<{
        accessToken: string;
    }>;
    forgetPasswordIntoDB: (id: string) => Promise<{
        expiresIn: string;
        mailSent: boolean;
    }>;
    resetPasswordIntoDB: (payload: {
        id: string;
        newPassword: string;
    }, idFromToken: string) => Promise<{
        message: string;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map