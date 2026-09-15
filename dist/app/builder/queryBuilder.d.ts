import { Model } from "mongoose";
export type ListQueryInput = Record<string, unknown>;
export interface ListQueryConfig {
    searchableFields?: string[];
    baseFilter?: Record<string, unknown>;
    defaultLimit?: number;
    defaultSort?: string;
}
export interface ParsedListQuery {
    filter: Record<string, unknown>;
    page: number;
    limit: number;
    skip: number;
    sort: string;
    select: string;
}
export interface PaginationMeta {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
/**
 * Turns request query params into a Mongoose filter plus pagination/sort/select options.
 * Reuse across list endpoints by passing different `searchableFields` / `baseFilter`.
 */
export declare function parseListQuery(query: ListQueryInput, config?: ListQueryConfig): ParsedListQuery;
/**
 * Runs find + countDocuments in parallel. Optional `configure` applies populate / lean / etc.
 * Chain order: find → configure (e.g. populate) → sort → skip → limit → select.
 */
type FindQuery<T> = ReturnType<Model<T>["find"]>;
export declare function paginate<T>(model: Model<T>, parsed: ParsedListQuery, configure?: (query: FindQuery<T>) => FindQuery<T>): Promise<{
    meta: PaginationMeta;
    data: T[];
}>;
export {};
//# sourceMappingURL=queryBuilder.d.ts.map