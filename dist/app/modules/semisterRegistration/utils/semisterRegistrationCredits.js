import AppError from "../../../errors/handleAppError.js";
const semesterCreditByCode = Object.freeze({
    "01": Object.freeze({ minCredit: 10, maxCredit: 20 }), // Autumn
    "02": Object.freeze({ minCredit: 5, maxCredit: 15 }), // Summer
    "03": Object.freeze({ minCredit: 2, maxCredit: 8 }), // Fall
});
export const getSemesterRegistrationCreditsByCode = (academicSemesterCode) => {
    const creditConfig = semesterCreditByCode[academicSemesterCode];
    if (!creditConfig) {
        throw new AppError("No credit configuration found for this semester code", 400);
    }
    validateSemesterRegistrationCredits(creditConfig.minCredit, creditConfig.maxCredit);
    return creditConfig;
};
export const validateSemesterRegistrationCredits = (minCredit, maxCredit) => {
    if (minCredit > maxCredit || minCredit < 0 || maxCredit < 0) {
        throw new AppError("Min credit cannot be greater than max credit or negative", 400);
    }
};
//# sourceMappingURL=semisterRegistrationCredits.js.map