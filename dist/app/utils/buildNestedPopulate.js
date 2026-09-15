//  * Build a chained populate tree for the same path.
//  * Example path "a.b" with depth 3 => a.b -> a.b -> a.b
export const buildNestedPopulate = (path, depth) => {
    const safeDepth = Math.max(1, depth);
    const root = { path };
    let current = root;
    for (let i = 1; i < safeDepth; i++) {
        const next = { path };
        current.populate = next;
        current = next;
    }
    return root;
};
//# sourceMappingURL=buildNestedPopulate.js.map