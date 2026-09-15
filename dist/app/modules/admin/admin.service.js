import { paginate, parseListQuery } from "../../builder/queryBuilder.js";
import { normalizeMongoUpdatePayload } from "../../utils/mongoPartialUpdate.js";
import { UserModel } from "../user/user.model.js";
import AdminModel from "./admin.model.js";
import { startSession } from "mongoose";
// const CreateAdminIntoDB = async (admin: Admin) => {
//   const createdAdmin = await AdminModel.create(admin);
//   return createdAdmin;
// };
// Get all admins from DB
const getAllAdminsFromDB = async (query = {}) => {
    const parsed = parseListQuery(query, {
        searchableFields: ["name", "email"],
    });
    const { meta, data: admins } = await paginate(AdminModel, parsed, (q) => q.populate("user"));
    return { meta, admins };
};
// Get admin by ID from DB
const getAdminByIdFromDB = async (id) => {
    const admin = await AdminModel.findOne({ _id: id, isDeleted: false });
    return admin;
};
//update admin info in DB
const updateAdminInDB = async (id, admin) => {
    const updatedAdmin = await AdminModel.findByIdAndUpdate(id, normalizeMongoUpdatePayload(admin), {
        returnDocument: "after",
    });
    return updatedAdmin;
};
// delete admin from DB
const deleteAdminFromDB = async (id) => {
    const session = await startSession();
    try {
        session.startTransaction();
        const deletedAdmin = await AdminModel.findOneAndUpdate({ _id: id, isDeleted: false }, { isDeleted: true }, { returnDocument: "after", session });
        if (!deletedAdmin) {
            await session.abortTransaction();
            return null;
        }
        await UserModel.findByIdAndUpdate(deletedAdmin.user, { isDeleted: true }, { session });
        await session.commitTransaction();
        return deletedAdmin;
    }
    catch (error) {
        await session.abortTransaction();
        throw error;
    }
    finally {
        await session.endSession();
    }
};
export const AdminService = {
    getAllAdminsFromDB,
    getAdminByIdFromDB,
    updateAdminInDB,
    deleteAdminFromDB,
};
//# sourceMappingURL=admin.service.js.map