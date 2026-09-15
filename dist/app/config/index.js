import dotenv from "dotenv";
import path from "path";
// Load environment variables from .env file, here quiet:true means if the .env file is missing, it won't throw an error and will just ignore it., if you want to make sure the .env file is present, you can set it to false or remove the quiet option.
dotenv.config({ path: path.join(process.cwd(), ".env"), quiet: true });
// Export the configuration object with the necessary environment variables. The PORT variable defaults to 3000 if not set, and MONGO_URI is required (you can adjust this as needed).
export default {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI || "",
    BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS
        ? parseInt(process.env.BCRYPT_SALT_ROUNDS)
        : 10, // Default to 10 if not set
    DEFAULT_USER_PASSWORD: process.env.DEFAULT_USER_PASSWORD || "123456", // Default password if not set,
    DEVELOPMENT_MODE: process.env.NODE_ENV === "development", // Check if the environment is development,its return true if NODE_ENV is set to 'development', otherwise false
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "5d",
    JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN || "7d",
    DOMAIN: process.env.DOMAIN,
    FRONTEND_URL: process.env.FRONTEND_URL,
    SMTP_HOST: process.env.SMTP_HOST || "smtp.gmail.com",
    SMTP_PORT: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587,
    SMTP_SECURE: process.env.SMTP_SECURE === "true",
    SMTP_FAMILY: process.env.SMTP_FAMILY
        ? parseInt(process.env.SMTP_FAMILY, 10)
        : 4,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_APP_NAME: process.env.EMAIL_APP_NAME,
    CLOUD_NAME: process.env.CLOUD_NAME,
    API_KEY: process.env.API_KEY,
    API_SECRET: process.env.API_SECRET,
    SUPER_ADMIN_ID: process.env.SUPER_ADMIN_ID,
    SUPER_ADMIN_PASSWORD: process.env.SUPER_ADMIN_PASSWORD,
    SUPER_ADMIN_EMAIL: process.env.SUPER_ADMIN_EMAIL,
};
//# sourceMappingURL=index.js.map