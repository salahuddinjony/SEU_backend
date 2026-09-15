import z from "zod";
export declare const facultyValidations: {
    createFacultyPayloadSchema: z.ZodObject<{
        password: z.ZodOptional<z.ZodString>;
        facultyData: z.ZodObject<{
            name: z.ZodObject<{
                firstName: z.ZodString;
                middleName: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
                lastName: z.ZodString;
            }, z.z.core.$strip>;
            email: z.ZodString;
            experience: z.ZodNumber;
            designation: z.ZodString;
            contactNo: z.ZodString;
            emergencyContactNo: z.ZodString;
            gender: z.ZodEnum<{
                male: "male";
                female: "female";
                other: "other";
            }>;
            dateOfBirth: z.z.ZodCoercedDate<unknown>;
            bloodGroup: z.ZodEnum<{
                "A+": "A+";
                "A-": "A-";
                "B+": "B+";
                "B-": "B-";
                "AB+": "AB+";
                "AB-": "AB-";
                "O+": "O+";
                "O-": "O-";
            }>;
            presentAddress: z.ZodString;
            permanentAddress: z.ZodString;
        }, z.z.core.$strict>;
    }, z.z.core.$strict>;
    updateFacultyValidationSchema: z.ZodObject<{
        faculty: z.ZodObject<{
            email: z.ZodOptional<z.ZodString>;
            experience: z.ZodOptional<z.ZodNumber>;
            designation: z.ZodOptional<z.ZodString>;
            contactNo: z.ZodOptional<z.ZodString>;
            emergencyContactNo: z.ZodOptional<z.ZodString>;
            gender: z.ZodOptional<z.ZodEnum<{
                male: "male";
                female: "female";
                other: "other";
            }>>;
            dateOfBirth: z.ZodOptional<z.z.ZodCoercedDate<unknown>>;
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
            presentAddress: z.ZodOptional<z.ZodString>;
            permanentAddress: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodObject<{
                firstName: z.ZodOptional<z.ZodString>;
                middleName: z.ZodOptional<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>>;
                lastName: z.ZodOptional<z.ZodString>;
            }, z.z.core.$strict>>;
        }, z.z.core.$strict>;
    }, z.z.core.$strict>;
};
//# sourceMappingURL=faculty.validation.d.ts.map