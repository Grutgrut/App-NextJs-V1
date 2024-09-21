"use client"
import React from 'react'

import { useFormReservation, State } from '@/hooks/useFormReservation';
import { addHours, addMinutes, format, getDay, isSameDay, setHours, setMinutes } from 'date-fns';
import { log } from 'console';
import { stringify } from 'querystring';
import { TServices, TServicesData } from '@/types';

type TarrayOfHeures = {
    index: number,
    hour: number,
    minutes: number,
    isShow: boolean
    isComplet: boolean
    isFerme: boolean
    dateFormated: string
}

type TserviceCustomNumber = {
    id: number;
    is_hour_complet: number[];
    is_day_complet: boolean;
    is_hour_ferme: number[];
    date: Date;
}

const OpeningHours = () => {

    let { service_custom, services, date, updateDate, updateDateFormated, updateStep } = useFormReservation();
    const day = getDay(date);

    const handleChangeHeure = (heure: number, minutes: number) => {
        let dateTemp = new Date(date);
        dateTemp = setHours(dateTemp, heure)
        dateTemp = setMinutes(dateTemp, minutes)


        updateDate(dateTemp)
        let dateFormated = format(dateTemp, "dd/MM/yyyy HH:mm")
        updateDateFormated(dateFormated)
        updateStep(3)
    }


    console.log('custom service', service_custom);
    //let array = service_custom?.data[0].array_disabled_hour

    //console.log(array);



    const generateArrayOfHeure = (): TarrayOfHeures[] => {
        const arrayOfHeures = []
        let count = 0;
        for (let index = 0; index < 24; index++) {
            let initMinutes = 0;
            for (let j = 0; j < 4; j++) {
                let time = { 'index': count, 'hour': index, 'minutes': initMinutes, 'isShow': true, 'isComplet': false, 'isFerme': false, 'dateFormated': "" }
                arrayOfHeures.push(time);
                initMinutes += 15
                count += 1;
            }
        }
        return arrayOfHeures;
    }

    const getServicesOfTheDay = (): number[][] => {
        let arrayOfarrayOfAuthorizedService: number[][] = []
        services?.data?.map((item) => {
            if (item.jour === day) {

                let tempArray = item.authorizedId.split(',')
                let numberArray: number[] = [];
                for (let k = 0; k < tempArray.length; k++) {
                    numberArray.push(parseInt(tempArray[k]));
                }
                arrayOfarrayOfAuthorizedService.push(numberArray)
            }
        }
        )

        arrayOfarrayOfAuthorizedService.sort(function (a, b) {
            var keyA = new Date(a[0]),
                keyB = new Date(b[0]);
            // Compare the 2 dates
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });


        return arrayOfarrayOfAuthorizedService;
    }

    const getServiceCustomOfTheDay = (): TserviceCustomNumber => {
        let newCustomService: TserviceCustomNumber = {
            id: 0,
            is_hour_complet: [],
            is_day_complet: false,
            is_hour_ferme: [],
            date: new Date
        }
        //Tester si il n'y a pas de service custon pour ce jour
        //

        service_custom?.data?.map((item) => {
            console.log(date);
            console.log(new Date(item.date));


            if (isSameDay(item.date, date)) {

                newCustomService.is_day_complet = item.is_day_complet;

                let tempArrayComplet = item.is_hour_complet.split(',')
                let numberArrayComplet: number[] = [];
                for (let k = 0; k < tempArrayComplet.length; k++) {
                    numberArrayComplet.push(parseInt(tempArrayComplet[k]));
                }
                newCustomService.is_hour_complet = numberArrayComplet;

                let tempArrayFerme = item.is_hour_ferme.split(',')
                let numberArrayFerme: number[] = [];
                for (let k = 0; k < tempArrayFerme.length; k++) {
                    numberArrayFerme.push(parseInt(tempArrayFerme[k]));
                }
                newCustomService.is_hour_ferme = numberArrayFerme;

            }

        })
        return newCustomService;
    }

    const updateArrayOfHeureFromServices = () => {
        let arrayOfAuthorizedService: TarrayOfHeures[][] = []

        for (let i = 0; i < servicesOfTheDay.length; i++) {
            const tempArrayOfHeures: TarrayOfHeures[] = JSON.parse(JSON.stringify(arrayOfHeures)); /* CLONE un tableau par valeur et non par reference */
            for (let l = 0; l < tempArrayOfHeures.length; l++) {
                tempArrayOfHeures[l].isShow = false

                let dateFormated = date;
                dateFormated = setHours(dateFormated, tempArrayOfHeures[l].hour)
                dateFormated = setMinutes(dateFormated, tempArrayOfHeures[l].minutes)
                tempArrayOfHeures[l].dateFormated = format(dateFormated, "HH:mm")

                for (let j = 0; j < servicesOfTheDay[i].length; j++) {
                    if (tempArrayOfHeures[l].index === servicesOfTheDay[i][j]) {
                        tempArrayOfHeures[l].isShow = true
                    }
                }


                if (Object.keys(serviceCustomOfTheDay).length !== 0) {

                    if (serviceCustomOfTheDay.is_hour_complet.length) {
                        for (let k = 0; k < serviceCustomOfTheDay.is_hour_complet.length; k++) {

                            if (tempArrayOfHeures[l].index === serviceCustomOfTheDay.is_hour_complet[k]) {
                                tempArrayOfHeures[l].isComplet = true
                            }

                        }
                    }
                    if (serviceCustomOfTheDay.is_hour_ferme.length) {
                        for (let k = 0; k < serviceCustomOfTheDay.is_hour_ferme.length; k++) {
                            if (tempArrayOfHeures[l].index === serviceCustomOfTheDay.is_hour_ferme[k]) {
                                tempArrayOfHeures[l].isFerme = true
                            }

                        }
                    }
                }

            }
            arrayOfAuthorizedService.push(tempArrayOfHeures)

        }


        return arrayOfAuthorizedService;
    }



    const arrayOfHeures = generateArrayOfHeure()
    const servicesOfTheDay = getServicesOfTheDay()
    const serviceCustomOfTheDay = getServiceCustomOfTheDay()
    const arrayOfHeuresFromServices = updateArrayOfHeureFromServices()
    //console.log(arrayOfHeuresFromServices);



    /* je recupere le service du jour */
    /* je retire du tableau les créneaux fermé<s></s>*/
    /*je rend jolie l'<affichage></affichage>*/






    return (
        <>
            <section>
                <div className="flex flex-col items-center justify-center mx-auto max-w-7xl px-4  sm:px-6 lg:px-8 _dark:bg-gray-900">
                    {arrayOfHeuresFromServices.map((service, i) => (
                        <div className="w-full max-w-xl p-2 space-y-8 sm:p-8 rounded-lg shadow _dark:bg-gray-800">
                            <span>Déjeuner :</span>
                            <div className="grid grid-cols-4 gap-2 xs:gap-4 text-indigo text-xl">

                                {service.map((item, i) => (
                                    <button type="button" className={`text-center shadow mb-4 rounded-md border p-2 ${item.isShow ? "" : "text-secondary hidden"} ${!item.isComplet ? "" : "text-secondary"}  ${!item.isFerme ? "" : "text-secondary"}`} onClick={item.isShow ? () => { handleChangeHeure(item.hour, item.minutes) } : () => { }} disabled={item.isFerme || item.isComplet} >
                                        {item.isFerme ? "Fermé" : item.isComplet ? "Complet" : item.dateFormated}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}




                </div >
            </section >
        </>
    )
}

export default OpeningHours
