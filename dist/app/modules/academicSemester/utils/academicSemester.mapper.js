import { semesterNameAndCodeMapper } from "../academicSemester.constant.js";
export const isCorrectSemester = (name, code) => {
    const expectedCode = semesterNameAndCodeMapper[name];
    if (!expectedCode || expectedCode !== code) {
        throw new Error(`Invalid semester combination:${name} does not match code:${code}.`);
    }
};
//# sourceMappingURL=academicSemester.mapper.js.map