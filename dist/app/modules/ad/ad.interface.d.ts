import { Types } from "mongoose";
export interface AdInterface {
    _id?: Types.ObjectId;
    title: string;
    image: string;
    link: string;
    isDeleted?: boolean;
}
//# sourceMappingURL=ad.interface.d.ts.map