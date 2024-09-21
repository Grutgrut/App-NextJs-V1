"use client"
import React from 'react'

import { useFormReservation, State } from '@/hooks/useFormReservation';
import { format } from 'date-fns';



const Showform = () => {

    let { date } = useFormReservation();

    console.log(date)
    const date1 = format(date, "dd/MM/yyyy");
    return (
        <div>
            {date1}
        </div>
    )
}

export default Showform
