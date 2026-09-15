import z from 'zod';
export declare const academicValidatons: {
    academicSemesterValidationSchema: z.ZodObject<{
        name: z.ZodEnum<{
            Autumn: "Autumn";
            Summer: "Summer";
            Fall: "Fall";
        }>;
        code: z.ZodEnum<{
            "01": "01";
            "02": "02";
            "03": "03";
        }>;
        year: z.z.ZodCoercedDate<unknown>;
        startMonth: z.ZodEnum<{
            January: "January";
            February: "February";
            March: "March";
            April: "April";
            May: "May";
            June: "June";
            July: "July";
            August: "August";
            September: "September";
            October: "October";
            November: "November";
            December: "December";
        }>;
        endMonth: z.ZodEnum<{
            January: "January";
            February: "February";
            March: "March";
            April: "April";
            May: "May";
            June: "June";
            July: "July";
            August: "August";
            September: "September";
            October: "October";
            November: "November";
            December: "December";
        }>;
    }, z.z.core.$strict>;
    updateAcademicSemesterValidationSchema: z.ZodObject<{
        name: z.ZodOptional<z.ZodEnum<{
            Autumn: "Autumn";
            Summer: "Summer";
            Fall: "Fall";
        }>>;
        code: z.ZodOptional<z.ZodEnum<{
            "01": "01";
            "02": "02";
            "03": "03";
        }>>;
        year: z.ZodOptional<z.z.ZodCoercedDate<unknown>>;
        startMonth: z.ZodOptional<z.ZodEnum<{
            January: "January";
            February: "February";
            March: "March";
            April: "April";
            May: "May";
            June: "June";
            July: "July";
            August: "August";
            September: "September";
            October: "October";
            November: "November";
            December: "December";
        }>>;
        endMonth: z.ZodOptional<z.ZodEnum<{
            January: "January";
            February: "February";
            March: "March";
            April: "April";
            May: "May";
            June: "June";
            July: "July";
            August: "August";
            September: "September";
            October: "October";
            November: "November";
            December: "December";
        }>>;
    }, z.z.core.$strict>;
};
//# sourceMappingURL=academicSemester.validation.d.ts.map