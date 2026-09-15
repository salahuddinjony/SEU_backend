import CounterModel from "./counter.model.js";
const createCounterIntoDB = async (id, fieldName, session) => {
    const counterData = await CounterModel.findOneAndUpdate({
        key: id,
        name: fieldName,
    }, {
        $inc: { sequenceValue: 1 },
        // $setOnInsert is used to set the value of the sequenceValue field to 1 if the document does not exist in the database.
        $setOnInsert: {
            key: id,
            name: fieldName,
        },
    }, {
        returnDocument: "after",
        upsert: true,
        session: session ?? null,
    });
    return counterData;
};
export const CounterService = {
    createOrFindCounterIntoDB: createCounterIntoDB,
};
//# sourceMappingURL=counter.service.js.map