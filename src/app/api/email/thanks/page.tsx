import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import WelcomeEmail from "../../../../../emails/thanks1";
import ThanksTemp from "../../../../../emails/thanks";
import { sendEmail } from "@/lib/email";
import { log } from "console";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    //const { code } = req.body;


    const info = await sendEmail({
        from: '"Philippe" <contact@la-plank-des-gones.fr>',
        to: "contact@la-plank-des-gones.fr",
        subject: 'test email',
        html: render(<ThanksTemp userName="{ code } " />),
    });


    //return res.status(200).json({ message: req.query });
    //return res.status(200).json({ message: "Email sent successfully" });
    //console.log(info);
    return res.status(200).json({ message: "Email sent successfully" });
    return res;
}