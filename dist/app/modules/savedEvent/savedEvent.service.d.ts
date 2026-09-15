import { Types } from "mongoose";
export declare const SavedEventService: {
    save: (eventId: string, userId: string) => Promise<import("mongoose").Document<unknown, {}, import("./savedEvent.interface.js").SavedEventInterface, {}, import("mongoose").DefaultSchemaOptions> & import("./savedEvent.interface.js").SavedEventInterface & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    remove: (eventId: string, userId: string) => Promise<import("mongoose").Document<unknown, {}, import("./savedEvent.interface.js").SavedEventInterface, {}, import("mongoose").DefaultSchemaOptions> & import("./savedEvent.interface.js").SavedEventInterface & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    listMine: (userId: string) => import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./savedEvent.interface.js").SavedEventInterface, {}, import("mongoose").DefaultSchemaOptions> & import("./savedEvent.interface.js").SavedEventInterface & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[], import("mongoose").Document<unknown, {}, import("./savedEvent.interface.js").SavedEventInterface, {}, import("mongoose").DefaultSchemaOptions> & import("./savedEvent.interface.js").SavedEventInterface & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("./savedEvent.interface.js").SavedEventInterface, "find", {}>;
    getMineById: (eventId: string, userId: string) => Promise<import("mongoose").Document<unknown, {}, import("./savedEvent.interface.js").SavedEventInterface, {}, import("mongoose").DefaultSchemaOptions> & import("./savedEvent.interface.js").SavedEventInterface & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
};
//# sourceMappingURL=savedEvent.service.d.ts.map