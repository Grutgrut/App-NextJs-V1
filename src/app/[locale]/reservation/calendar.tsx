"use client"
import Calendar from 'react-calendar'
/* import 'react-calendar/dist/Calendar.css'; */

import '@/components/slyles/custom-calendar.css'
import React, { FC } from "react";
import { es, enGB, fr, de, ru, ja, ar, faIR, Locale } from "date-fns/locale";
import { format, isSameDay } from "date-fns";

import { i18nLocales } from "@/i18n"
import { usePathname } from "next/navigation";
/* Pour react-modern-calendar-datepicker voir pour ajouter les locales manuellement */

import { useFormReservation } from "@/hooks/useFormReservation";
import { Button } from '@/components/ui/button';
import { log } from 'console';

type Detail = "month" | "year" | "decade" | "century"

type CalendarTileProperties = {
    date: Date;
    view: Detail;
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];



type OnChangeDateCallback = (date: Date | Date[]) => void

const CalendarComp = () => {
    const [date1, setDate1] = React.useState<Date | undefined>(new Date())
    /* const [lang, setLang] = React.useState<Locale | undefined>() */
    const [lang, setLang] = React.useState<string | undefined>()
    const { date, updateDate, updateStep, updateDateFormated } = useFormReservation()
    let { service_custom } = useFormReservation();



    if (!lang) {
        setLang('fr')
        i18nLocales.map((loc) => {
            const pathname = usePathname()
            const locale = pathname.split('/')[1];
            if (loc.code === usePathname().split("/")[1]) {
                setLang(loc.code)
            }
        })
    }
    if (service_custom !== null) {
        const service = service_custom.data;
    }
    /*   if (service_custom !== null) {
          const arrayDisabled: Date[] = [];
          const service = service_custom.data;
          service.map(function (item, i) {
              let tempday = {};
              tempday.year = moment(item.date).year();
              tempday.month = moment(item.date).month() + 1;
              tempday.day = moment(item.date).date();
              if (item.is_service_open === 3) {
                  arrayDisabled.push(tempday);
              }
              return true;
          })

      } */


    const bookedDays = [
        new Date(2024, 5, 6),
        new Date(2024, 6, 9),
        new Date(2024, 6, 10)
    ];


    /* const tileDisabled = ({ date }: { date: Date }) => {
        return (
            date.getDay() === 0 ||
            date.getDay() === 6
        );
    }; */

    const tileDisabled = ({ date }: { date: Date }) => {
        let response = false;

        if (service_custom !== null) {
            service_custom.data.forEach(element => {
                /*  console.log(element)
                 console.log(date)
                 console.log(isSameDay(element, date)); */
                if (isSameDay(element.date, date)) {
                    console.log(element.is_day_complet);

                    if (element.is_day_complet) {
                        response = true
                    }
                }
            })
        }
        return response;
    };

    const tileContent = ({ date, view }: CalendarTileProperties): JSX.Element | null => {
        let response = null;
        bookedDays.forEach(element => {
            //console.log(element)
            //console.log('l72', view)
            //console.log(isSameDay(element, date));
            if (isSameDay(element, date)) {
                response = <p>complet</p>;
            }
        })
        return response;
    };

    const handleOnChange = (value: any) => {

        let dateFormated: string = format(value, 'dd/MM/yyyy')
        updateDateFormated(dateFormated)
        updateDate(value)
        updateStep(2)

    }


    // if (!lang) return <Loading></Loading>;
    return (
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm items-center content-center">
                <Calendar
                    locale={lang}
                    value={date}
                    onChange={handleOnChange}
                    /* tileDisabled={({ date }) => blackoutDates.includes(date.getDate())} */
                    tileDisabled={tileDisabled}
                    tileContent={tileContent}
                    className="shadow mb-4 rounded-md border p-2"

                />
            </div>
        </>
    )
}

export default CalendarComp
