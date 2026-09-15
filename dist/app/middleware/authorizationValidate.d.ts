import { UserRoleType } from "../modules/user/user.interface.js";
declare const authorizationValidate: (...roles: UserRoleType[]) => import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export default authorizationValidate;
//# sourceMappingURL=authorizationValidate.d.ts.map