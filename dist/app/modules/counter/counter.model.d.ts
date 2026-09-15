import { counter } from "./counter.interface.js";
declare const CounterModel: import("mongoose").Model<counter, {}, {}, {}, import("mongoose").Document<unknown, {}, counter, {}, import("mongoose").DefaultSchemaOptions> & counter & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, counter>;
export default CounterModel;
//# sourceMappingURL=counter.model.d.ts.map