export const restrictUpdateFieldsChecker = (schema, updateMethods = [
    "findOneAndUpdate",
    "updateOne",
    "updateMany",
], restrictedFields = []) => {
    const checkUpdate = function () {
        const update = this.getUpdate();
        const flatUpdate = {
            ...update,
            ...(update?.$set || {}),
        };
        for (const field of restrictedFields) {
            if (flatUpdate?.[field] !== undefined) {
                throw new Error(`${field} field cannot be updated`);
            }
        }
    };
    // Apply to all methods dynamically
    updateMethods.forEach((method) => {
        schema.pre(method, checkUpdate);
    });
};
//# sourceMappingURL=restrictedUpdateFiled.js.map