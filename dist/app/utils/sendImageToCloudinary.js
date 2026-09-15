import { v2 as cloudinary } from "cloudinary";
import config from "../config/index.js";
import multer from "multer";
import fs from "fs";
const uploadDirectory = process.cwd() + "/uploads";
fs.mkdirSync(uploadDirectory, { recursive: true });
// Configuration
cloudinary.config({
    cloud_name: config.CLOUD_NAME,
    api_key: config.API_KEY,
    api_secret: config.API_SECRET,
});
export const sendImageToCloudinary = async (path, imageName) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(path, {
            public_id: imageName,
        }, (error, result) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(result);
        });
    }).finally(async () => {
        await removeUploadedLocalFile(path);
    });
};
export const removeUploadedLocalFile = async (filePath) => {
    if (!filePath)
        return;
    try {
        await fs.promises.unlink(filePath);
    }
    catch (error) {
        if (!(error instanceof Error) ||
            !("code" in error) ||
            error.code !== "ENOENT") {
            console.error("Failed to delete uploaded file:", error);
        }
    }
};
// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (_req, _file, cb) {
        cb(null, uploadDirectory);
    },
    filename: function (_req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix);
    },
});
export const upload = multer({ storage: storage });
//# sourceMappingURL=sendImageToCloudinary.js.map