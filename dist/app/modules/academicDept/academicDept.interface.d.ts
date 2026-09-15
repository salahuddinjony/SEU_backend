import { Types } from 'mongoose';
import { AcademicFaculty } from '../academiFaculty/academicFaculty.interface.js';
export type AcademicDept = {
    name: string;
    academicFaculty: Types.ObjectId | AcademicFaculty;
    isDeleted?: boolean;
};
//# sourceMappingURL=academicDept.interface.d.ts.map