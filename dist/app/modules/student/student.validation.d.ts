import { z } from "zod";
export declare const userNameValidationSchema: z.ZodObject<{
    firstName: z.ZodString;
    middleName: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    lastName: z.ZodString;
}, z.core.$strip>;
export declare const studentValidationSchema: z.ZodObject<{
    name: z.ZodObject<{
        firstName: z.ZodString;
        middleName: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
        lastName: z.ZodString;
    }, z.core.$strip>;
    gender: z.ZodEnum<{
        male: "male";
        female: "female";
        other: "other";
    }>;
    dateOfBirth: z.ZodCoercedDate<unknown>;
    email: z.ZodString;
    contactNo: z.ZodString;
    emergencyContactNo: z.ZodString;
    bloodGroup: z.ZodOptional<z.ZodEnum<{
        "A+": "A+";
        "A-": "A-";
        "B+": "B+";
        "B-": "B-";
        "AB+": "AB+";
        "AB-": "AB-";
        "O+": "O+";
        "O-": "O-";
    }>>;
    presentAddress: z.ZodString;
    permanentAddress: z.ZodString;
    guardian: z.ZodObject<{
        fatherName: z.ZodString;
        fatherOccupation: z.ZodString;
        fatherContactNo: z.ZodString;
        motherName: z.ZodString;
        motherOccupation: z.ZodString;
        motherContactNo: z.ZodString;
    }, z.core.$strip>;
    localGuardian: z.ZodObject<{
        name: z.ZodString;
        occupation: z.ZodString;
        contactNo: z.ZodString;
        address: z.ZodString;
    }, z.core.$strip>;
    admissionSemester: z.ZodString;
    academicDept: z.ZodString;
}, z.core.$strict>;
export declare const studentValidation: {
    studentValidationSchema: z.ZodObject<{
        name: z.ZodObject<{
            firstName: z.ZodString;
            middleName: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
            lastName: z.ZodString;
        }, z.core.$strip>;
        gender: z.ZodEnum<{
            male: "male";
            female: "female";
            other: "other";
        }>;
        dateOfBirth: z.ZodCoercedDate<unknown>;
        email: z.ZodString;
        contactNo: z.ZodString;
        emergencyContactNo: z.ZodString;
        bloodGroup: z.ZodOptional<z.ZodEnum<{
            "A+": "A+";
            "A-": "A-";
            "B+": "B+";
            "B-": "B-";
            "AB+": "AB+";
            "AB-": "AB-";
            "O+": "O+";
            "O-": "O-";
        }>>;
        presentAddress: z.ZodString;
        permanentAddress: z.ZodString;
        guardian: z.ZodObject<{
            fatherName: z.ZodString;
            fatherOccupation: z.ZodString;
            fatherContactNo: z.ZodString;
            motherName: z.ZodString;
            motherOccupation: z.ZodString;
            motherContactNo: z.ZodString;
        }, z.core.$strip>;
        localGuardian: z.ZodObject<{
            name: z.ZodString;
            occupation: z.ZodString;
            contactNo: z.ZodString;
            address: z.ZodString;
        }, z.core.$strip>;
        admissionSemester: z.ZodString;
        academicDept: z.ZodString;
    }, z.core.$strict>;
    updateStudentValidationSchema: z.ZodObject<{
        student: z.ZodObject<{
            gender: z.ZodOptional<z.ZodEnum<{
                male: "male";
                female: "female";
                other: "other";
            }>>;
            dateOfBirth: z.ZodOptional<z.ZodCoercedDate<unknown>>;
            email: z.ZodOptional<z.ZodString>;
            contactNo: z.ZodOptional<z.ZodString>;
            emergencyContactNo: z.ZodOptional<z.ZodString>;
            bloodGroup: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                "A+": "A+";
                "A-": "A-";
                "B+": "B+";
                "B-": "B-";
                "AB+": "AB+";
                "AB-": "AB-";
                "O+": "O+";
                "O-": "O-";
            }>>>;
            presentAddress: z.ZodOptional<z.ZodString>;
            permanentAddress: z.ZodOptional<z.ZodString>;
            admissionSemester: z.ZodOptional<z.ZodString>;
            academicDept: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodObject<{
                firstName: z.ZodOptional<z.ZodString>;
                middleName: z.ZodOptional<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>>;
                lastName: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
            guardian: z.ZodOptional<z.ZodObject<{
                fatherName: z.ZodOptional<z.ZodString>;
                fatherOccupation: z.ZodOptional<z.ZodString>;
                fatherContactNo: z.ZodOptional<z.ZodString>;
                motherName: z.ZodOptional<z.ZodString>;
                motherOccupation: z.ZodOptional<z.ZodString>;
                motherContactNo: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
            localGuardian: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                occupation: z.ZodOptional<z.ZodString>;
                contactNo: z.ZodOptional<z.ZodString>;
                address: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
        }, z.core.$strict>;
    }, z.core.$strict>;
};
//# sourceMappingURL=student.validation.d.ts.map