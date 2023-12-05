import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "consx31@gmail.com",
        pass: "uvni sbhe uule qqtq",
    },
});
export default async function sendEmail(email) {
    try {
        const a = await transporter.sendMail({
            from: "consx31@gmail.com",
            to: email.email,
            subject: email.subject,
            text: email.text,
            html: email.html,
        });
        console.log(a);
        console.log("Email sent successfully");
    } catch (error) {
        console.log("Error sending email", error);
    }
};