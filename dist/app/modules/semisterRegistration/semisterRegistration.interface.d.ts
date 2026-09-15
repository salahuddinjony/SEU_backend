import { Types } from "mongoose";
export type SemesterRegistration = {
    academicSemester: Types.ObjectId;
    status: "UPCOMING" | "ONGOING" | "COMPLETED";
    startDate: Date;
    endDate: Date;
    minCredit: number;
    maxCredit: number;
    isDeleted?: boolean;
};
//# sourceMappingURL=semisterRegistration.interface.d.ts.map