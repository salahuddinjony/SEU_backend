import { Schema, model } from "mongoose";
const CounterSchema = new Schema({
    key: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    sequenceValue: {
        type: Number,
        required: true,
        default: 0
    }
});
const CounterModel = model('Counter', CounterSchema);
export default CounterModel;
//# sourceMappingURL=counter.model.js.map