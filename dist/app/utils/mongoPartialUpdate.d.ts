export declare function isMongoOperatorUpdate(value: unknown): boolean;
export declare function partialFieldsToMongoUpdate(input: Record<string, unknown>, options?: {
    skipUndefined?: boolean;
}): Record<string, unknown>;
export declare function normalizeMongoUpdatePayload<T extends Record<string, unknown>>(payload: T, options?: {
    skipUndefined?: boolean;
}): Record<string, unknown> | T;
//# sourceMappingURL=mongoPartialUpdate.d.ts.map