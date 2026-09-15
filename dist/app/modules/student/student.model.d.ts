import { Schema } from "mongoose";
import { guradian, localGuardian, Student, userName } from "./student.interface.js";
export declare const userNameSchema: Schema<userName, import("mongoose").Model<userName, any, any, any, (import("mongoose").Document<unknown, any, userName, any, import("mongoose").DefaultSchemaOptions> & userName & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, userName, any, import("mongoose").DefaultSchemaOptions> & userName & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, userName>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, userName, import("mongoose").Document<unknown, {}, userName, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<userName & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    firstName?: import("mongoose").SchemaDefinitionProperty<string, userName, import("mongoose").Document<unknown, {}, userName, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<userName & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    middleName?: import("mongoose").SchemaDefinitionProperty<string | undefined, userName, import("mongoose").Document<unknown, {}, userName, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<userName & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    lastName?: import("mongoose").SchemaDefinitionProperty<string, userName, import("mongoose").Document<unknown, {}, userName, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<userName & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, userName>;
export declare const guradianSchema: Schema<guradian, import("mongoose").Model<guradian, any, any, any, (import("mongoose").Document<unknown, any, guradian, any, import("mongoose").DefaultSchemaOptions> & guradian & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, guradian, any, import("mongoose").DefaultSchemaOptions> & guradian & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, guradian>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, guradian, import("mongoose").Document<unknown, {}, guradian, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<guradian & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    fatherName?: import("mongoose").SchemaDefinitionProperty<string, guradian, import("mongoose").Document<unknown, {}, guradian, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<guradian & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    fatherOccupation?: import("mongoose").SchemaDefinitionProperty<string, guradian, import("mongoose").Document<unknown, {}, guradian, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<guradian & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    fatherContactNo?: import("mongoose").SchemaDefinitionProperty<string, guradian, import("mongoose").Document<unknown, {}, guradian, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<guradian & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    motherName?: import("mongoose").SchemaDefinitionProperty<string, guradian, import("mongoose").Document<unknown, {}, guradian, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<guradian & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    motherOccupation?: import("mongoose").SchemaDefinitionProperty<string, guradian, import("mongoose").Document<unknown, {}, guradian, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<guradian & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    motherContactNo?: import("mongoose").SchemaDefinitionProperty<string, guradian, import("mongoose").Document<unknown, {}, guradian, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<guradian & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, guradian>;
export declare const localGuardianSchema: Schema<localGuardian, import("mongoose").Model<localGuardian, any, any, any, (import("mongoose").Document<unknown, any, localGuardian, any, import("mongoose").DefaultSchemaOptions> & localGuardian & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, localGuardian, any, import("mongoose").DefaultSchemaOptions> & localGuardian & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, localGuardian>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, localGuardian, import("mongoose").Document<unknown, {}, localGuardian, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<localGuardian & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, localGuardian, import("mongoose").Document<unknown, {}, localGuardian, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<localGuardian & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    occupation?: import("mongoose").SchemaDefinitionProperty<string, localGuardian, import("mongoose").Document<unknown, {}, localGuardian, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<localGuardian & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    contactNo?: import("mongoose").SchemaDefinitionProperty<string, localGuardian, import("mongoose").Document<unknown, {}, localGuardian, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<localGuardian & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    address?: import("mongoose").SchemaDefinitionProperty<string, localGuardian, import("mongoose").Document<unknown, {}, localGuardian, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<localGuardian & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, localGuardian>;
export declare const StudentModel: import("mongoose").Model<Student, {}, {}, {}, import("mongoose").Document<unknown, {}, Student, {}, import("mongoose").DefaultSchemaOptions> & Student & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, Student>;
//# sourceMappingURL=student.model.d.ts.map