import express from 'express';
import validation from '../../middleware/validator/validetResquest.js';
import { AcademicDeptController } from './academicDept.controller.js';
import { academicDeptValidation } from './academicDept.validation.js';
import authorizationValidate from '../../middleware/authorizationValidate.js';
import { UserRole } from '../user/user.constant.js';
// Create a router instance
const router = express.Router();
// Route for creating an academic department
router.post('/create-academic-dept', authorizationValidate(UserRole.ADMIN, UserRole.SUPER_ADMIN), validation(academicDeptValidation.CreateAcademicDept), AcademicDeptController.createAcademicDept);
// Route for getting all academic departments
router.get('/get-all-academic-depts', AcademicDeptController.getAllAcademicDepts);
// Route for getting an academic department by ID
router.get('/get-academic-dept/:id', AcademicDeptController.getAcademicDeptById);
// Route for updating academic department info
router.patch('/update-academic-dept/:id', authorizationValidate(UserRole.ADMIN, UserRole.SUPER_ADMIN), validation(academicDeptValidation.UpdateAcademicDept), AcademicDeptController.updateAcademicDeptInfo);
// Route for deleting an academic department
router.delete('/delete-academic-dept/:id', authorizationValidate(UserRole.ADMIN, UserRole.SUPER_ADMIN), AcademicDeptController.deleteAcademicDept);
// Route for getting all deleted academic departments
router.get('/get-all-deleted-academic-depts', AcademicDeptController.getAllDeletedAcademicDepts);
// Route for restoring all deleted academic departments
router.patch('/restore-deleted-academic-depts', authorizationValidate(UserRole.ADMIN, UserRole.SUPER_ADMIN), AcademicDeptController.restoreDeletedAcademicDepts);
export const AcademicDeptRoute = router;
//# sourceMappingURL=academicDept.route.js.map