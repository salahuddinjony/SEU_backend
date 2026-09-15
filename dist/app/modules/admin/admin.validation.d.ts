import { z } from "zod";
export declare const adminValidation: {
    adminDataValidationSchema: z.ZodObject<{
        name: z.ZodObject<{
            firstName: z.ZodString;
            middleName: z.ZodOptional<z.ZodString>;
            lastName: z.ZodString;
        }, z.core.$strict>;
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
    }, z.core.$strict>;
    createAdminPayloadSchema: z.ZodObject<{
        password: z.ZodOptional<z.ZodString>;
        adminData: z.ZodObject<{
            name: z.ZodObject<{
                firstName: z.ZodString;
                middleName: z.ZodOptional<z.ZodString>;
                lastName: z.ZodString;
            }, z.core.$strict>;
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
        }, z.core.$strict>;
    }, z.core.$strict>;
    adminUpdatePayloadSchema: z.ZodObject<{
        admin: z.ZodObject<{
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
            name: z.ZodOptional<z.ZodObject<{
                firstName: z.ZodOptional<z.ZodString>;
                middleName: z.ZodOptional<z.ZodOptional<z.ZodString>>;
                lastName: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
        }, z.core.$strict>;
    }, z.core.$strict>;
};
//# sourceMappingURL=admin.validation.d.ts.map