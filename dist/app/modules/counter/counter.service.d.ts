import { ClientSession } from "mongoose";
export declare const CounterService: {
    createOrFindCounterIntoDB: (id: string, fieldName: string, session?: ClientSession) => Promise<import("mongoose").Document<unknown, {}, import("./counter.interface.js").counter, {}, import("mongoose").DefaultSchemaOptions> & import("./counter.interface.js").counter & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
};
//# sourceMappingURL=counter.service.d.ts.map