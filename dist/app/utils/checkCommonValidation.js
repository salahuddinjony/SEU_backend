import { Types } from 'mongoose';
import AppError from '../errors/handleAppError.js';
// Utility function to sanitize and validate ID
const getSanitizedId = (id) => id.trim();
// Utility function to check if an ID is a valid MongoDB ObjectId
const isValidId = (id) => Types.ObjectId.isValid(id);
const validateId = (id, next) => {
    const sanitizedId = getSanitizedId(id);
    if (!isValidId(sanitizedId)) {
        next(new AppError('Invalid id', 400));
        return;
    }
    return sanitizedId;
};
export const checkCommonValidation = {
    validateId
};
//# sourceMappingURL=checkCommonValidation.js.map