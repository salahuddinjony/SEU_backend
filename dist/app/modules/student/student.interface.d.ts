import { Types } from 'mongoose';
export type guradian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
};
export type localGuardian = {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
};
export type userName = {
    firstName: string;
    middleName?: string | undefined;
    lastName: string;
};
export type Student = {
    id: string;
    user: Types.ObjectId;
    name: userName;
    gender: "male" | "female" | "other";
    dateOfBirth: Date;
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-" | undefined;
    presentAddress: string;
    permanentAddress: string;
    guardian: guradian;
    localGuardian: localGuardian;
    profileImage?: string | undefined;
    admissionSemester: Types.ObjectId;
    academicDept: Types.ObjectId;
    isDeleted?: boolean;
};
//# sourceMappingURL=student.interface.d.ts.map