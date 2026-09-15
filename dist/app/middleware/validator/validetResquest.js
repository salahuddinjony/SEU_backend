import { removeUploadedLocalFile } from "../../utils/sendImageToCloudinary.js";
// *** Validate `body` (default), `cookies`, or `query` — use the matching schema per route.
const validation = (schema, source = "body") => {
    return async (req, _res, next) => {
        try {
            const raw = source === "body"
                ? req.body
                : source === "cookies"
                    ? (req.cookies ?? {})
                    : req.query;
            const parsed = await schema.parseAsync(raw);
            if (source === "body") {
                req.body = parsed;
            }
            return next();
        }
        catch (error) {
            await removeUploadedLocalFile(req.file?.path);
            return next(error);
        }
    };
};
export default validation;
//# sourceMappingURL=validetResquest.js.map