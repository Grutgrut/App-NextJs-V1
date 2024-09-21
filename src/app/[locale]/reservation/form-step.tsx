"use client"
import React, { useEffect } from "react";
import { useFormReservation } from "@/hooks/useFormReservation";
import CalendarComp from "./calendar";
import Showform from "./showform";
import { TServiceCustomData, TServicesData } from '@/types';
import { log } from 'console';
import Couverts from "./couverts";
import Opening_hours from "./opening_hours";
import FormReservation from "./form-reservation";


const FormStep = ({ service_custom, services }: {
    service_custom: TServiceCustomData
    services: TServicesData
}) => {

    const { step, setServiceCustom, setServices } = useFormReservation()

    useEffect(() => {
        setServiceCustom(service_custom)
    }, [setServiceCustom])

    useEffect(() => {
        setServices(services)
    }, [setServices])





    /*  return (
         <div>
             {service_custom ? (
                 // Rendu conditionnel en fonction de la présence de données
                 <div>Données chargées : {JSON.stringify(service_custom)}</div>
             ) : (
                 <div>Chargement des données...</div>
             )}
         </div>
     ) */


    switch (step) {
        case 1:
            return <CalendarComp />;
        case 2:
            return <Opening_hours />;
        case 3:
            return <Couverts />;
        case 4:
            return <FormReservation />;
        default:
            return null;
    }
};

export default FormStep;
