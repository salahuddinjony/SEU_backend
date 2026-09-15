import { ClientSession } from "mongoose";
import { UserRoleEnum } from "./user.interface.js";
export declare const UserUtils: {
    generateUserId: (role: UserRoleEnum, session?: ClientSession) => Promise<string>;
    resolveNewUserPassword: (password: string | undefined) => {
        password: string;
        needsPasswordReset: boolean;
    };
};
//# sourceMappingURL=user.utils.d.ts.map