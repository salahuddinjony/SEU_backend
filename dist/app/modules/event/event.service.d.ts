import { Types } from "mongoose";
import type { EventInterface } from "./event.interface.js";
export declare const EventService: {
    create: (payload: Record<string, unknown>, createdBy: string, imagePath?: string) => Promise<import("mongoose").Document<unknown, {}, EventInterface, {}, import("mongoose").DefaultSchemaOptions> & EventInterface & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    list: () => Promise<(import("mongoose").Document<unknown, {}, EventInterface, {}, import("mongoose").DefaultSchemaOptions> & EventInterface & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getById: (id: string) => Promise<(import("mongoose").Document<unknown, {}, EventInterface, {}, import("mongoose").DefaultSchemaOptions> & EventInterface & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    update: (id: string, payload: Record<string, unknown>, imagePath?: string) => Promise<import("mongoose").Document<unknown, {}, EventInterface, {}, import("mongoose").DefaultSchemaOptions> & EventInterface & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    remove: (id: string) => Promise<import("mongoose").Document<unknown, {}, EventInterface, {}, import("mongoose").DefaultSchemaOptions> & EventInterface & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
};
//# sourceMappingURL=event.service.d.ts.map