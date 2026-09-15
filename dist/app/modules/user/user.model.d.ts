import { Schema } from "mongoose";
import { UserInterface, UserMethods } from "./user.interface.js";
export declare const userSchema: Schema<UserInterface, UserMethods, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserInterface, import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, {
    id?: import("mongoose").SchemaDefinitionProperty<string, UserInterface, import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    password?: import("mongoose").SchemaDefinitionProperty<string, UserInterface, import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    email?: import("mongoose").SchemaDefinitionProperty<string, UserInterface, import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    name?: import("mongoose").SchemaDefinitionProperty<string | undefined, UserInterface, import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    dateOfBirth?: import("mongoose").SchemaDefinitionProperty<Date | undefined, UserInterface, import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    phone?: import("mongoose").SchemaDefinitionProperty<string | undefined, UserInterface, import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    gender?: import("mongoose").SchemaDefinitionProperty<"male" | "female" | "other" | undefined, UserInterface, import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    otherDetails?: import("mongoose").SchemaDefinitionProperty<string | undefined, UserInterface, import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    profileImage?: import("mongoose").SchemaDefinitionProperty<string | undefined, UserInterface, import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    passwordChangedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, UserInterface, import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    needsPasswordReset?: import("mongoose").SchemaDefinitionProperty<boolean | undefined, UserInterface, import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    role?: import("mongoose").SchemaDefinitionProperty<import("./user.interface.js").UserRoleEnum, UserInterface, import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    isDeleted?: import("mongoose").SchemaDefinitionProperty<boolean | undefined, UserInterface, import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    status?: import("mongoose").SchemaDefinitionProperty<import("./user.interface.js").UserStatusType | undefined, UserInterface, import("mongoose").Document<unknown, {}, UserInterface, {}, import("mongoose").DefaultSchemaOptions> & UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}, UserInterface>;
export declare const UserModel: UserMethods;
//# sourceMappingURL=user.model.d.ts.map