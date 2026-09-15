import { UserInterface } from "../../modules/user/user.interface.js";
import { Types } from "mongoose";
export type TokenPayloadType = Partial<UserInterface> & {
    _id?: Types.ObjectId | string;
};
//# sourceMappingURL=types.d.ts.map