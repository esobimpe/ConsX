import sendEmail from "../utils/sendEmail.js";

export const sendForm = async (req, res) => {
    try {
        const { formData } = req.body;
        
        const formattedData = JSON.stringify(formData, null, 2);

        const email = {
            email: "Consx31@gmail.com",
            subject: "Contact Form Submission",
            text: `Contact Form Data:\n\n${formattedData}`,
        };
        await sendEmail(email);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error sending email" });
    }
};