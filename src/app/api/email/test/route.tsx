import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import WelcomeEmail from "../../../../../emails/thanks1";
import ThanksTemp from "../../../../../emails/thanks";
import ConfirmReservation from "../../../../../emails/confirmReservation";
import { sendEmail } from "@/lib/email";
import { log } from "console";



export const GET = async (req: any) => {

    const url = new URL(req.url);
    console.log(url)
    const searchParams = new URLSearchParams(url.searchParams);
    console.log(searchParams.get('data'))

    if (searchParams.get('data') !== null) {
        const info = await sendEmail({
            from: '"Philippe" <contact@la-plank-des-gones.fr>',
            to: '"Philippe" <contact@la-plank-des-gones.fr>',
            subject: 'test email',
            html: render(<ThanksTemp userName={searchParams.get('data')} />),
        });
    }



    return Response.json(searchParams.get('data'))
}

export const POST = async (req: any) => {

    const data = await req.json();
    console.log("DATA", data);
    const info = await sendEmail({
        from: 'La Plank des Gones <contact@la-plank-des-gones.fr>',
        to: 'La Plank des Gones <contact@la-plank-des-gones.fr>',
        subject: '📅 Réservation de ' + data.prenom + ' ' + data.nom + ' le ' + data.dateFormated,
        html: render(<ConfirmReservation userName={data.prenom + ' ' + data.nom} nb_couverts={data.couverts} dateFormated={data.dateFormated} />),
    });


    return Response.json({ message: data.data });
    //return new Response("Bad Request", { status: 400 });
}