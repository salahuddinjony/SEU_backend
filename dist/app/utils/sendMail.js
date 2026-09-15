import nodemailer from "nodemailer";
import config from "../config/index.js";
import { getResetPasswordTemplate } from "./mailTemplate.js";
export const sendMail = async (to, subject, name, url) => {
    // Create a transporter using configurable SMTP settings.
    const transporter = nodemailer.createTransport({
        host: config.SMTP_HOST,
        port: config.SMTP_PORT,
        secure: !config.DEVELOPMENT_MODE,
        auth: {
            user: config.SMTP_USER,
            pass: config.SMTP_PASS,
        },
    });
    // Define the email options
    const mailOptions = {
        from: config.EMAIL_USER,
        to,
        subject,
        html: getResetPasswordTemplate({
            appName: config.EMAIL_APP_NAME,
            name,
            url,
        }),
    };
    // Send the email
    await transporter.sendMail(mailOptions);
};
//# sourceMappingURL=sendMail.js.map