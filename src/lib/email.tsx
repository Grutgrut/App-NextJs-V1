import nodemailer from "nodemailer"

type EmailPayload = {
    from: string
    to: string
    subject: string
    html: string
}

// Replace with your SMTP credentials
const smtpOptions = {
    host: process.env.SMTP_HOST || "ssl0.ovh.net",
    port: parseInt(process.env.SMTP_PORT || "465"),
    secure: true,
    auth: {
        user: process.env.SMTP_USER || "contact@la-plank-des-gones.fr",
        pass: process.env.SMTP_PASSWORD || "Philippe_74",
    },
}

export const sendEmail = async (data: EmailPayload) => {
    const transporter = nodemailer.createTransport({
        ...smtpOptions,
    })

    const info = await transporter.sendMail({
        /* from: process.env.SMTP_FROM_EMAIL, */
        ...data,
    })
    return info;
}