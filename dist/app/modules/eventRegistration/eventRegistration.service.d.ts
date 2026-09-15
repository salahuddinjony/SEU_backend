import { Types } from "mongoose";
export declare const EventRegistrationService: {
    register: (eventId: string, userId: string) => Promise<import("mongoose").Document<unknown, {}, import("./eventRegistration.interface.js").EventRegistrationInterface, {}, import("mongoose").DefaultSchemaOptions> & import("./eventRegistration.interface.js").EventRegistrationInterface & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    cancel: (eventId: string, userId: string) => Promise<import("mongoose").Document<unknown, {}, import("./eventRegistration.interface.js").EventRegistrationInterface, {}, import("mongoose").DefaultSchemaOptions> & import("./eventRegistration.interface.js").EventRegistrationInterface & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    listMine: (userId: string, eventId?: string) => Promise<(import("mongoose").Document<unknown, {}, import("./eventRegistration.interface.js").EventRegistrationInterface, {}, import("mongoose").DefaultSchemaOptions> & import("./eventRegistration.interface.js").EventRegistrationInterface & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    listAll: (eventId?: string) => Promise<(import("mongoose").Document<unknown, {}, import("./eventRegistration.interface.js").EventRegistrationInterface, {}, import("mongoose").DefaultSchemaOptions> & import("./eventRegistration.interface.js").EventRegistrationInterface & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    listByEvent: (eventId: string) => Promise<{
        event: import("mongoose").Document<unknown, {}, import("../event/event.interface.js").EventInterface, {}, import("mongoose").DefaultSchemaOptions> & import("../event/event.interface.js").EventInterface & Required<{
            _id: Types.ObjectId;
        }> & {
            __v: number;
        } & {
            id: string;
        };
        registrationCount: number;
        registrations: (import("mongoose").Document<unknown, {}, import("./eventRegistration.interface.js").EventRegistrationInterface, {}, import("mongoose").DefaultSchemaOptions> & import("./eventRegistration.interface.js").EventRegistrationInterface & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[];
    }>;
    dashboard: () => Promise<{
        users: number;
        admins: number;
        events: number;
        registrations: number;
        upcomingEvents: number;
    }>;
};
//# sourceMappingURL=eventRegistration.service.d.ts.map