"use client"
import React from "react";
import { format } from "date-fns"
import { useFormReservation } from "@/hooks/useFormReservation";
import { log } from 'console';

export const Stepper = (props: any) => {
    const { date, nb_couverts, step, dateFormated, updateNbCouverts, updateStep } = useFormReservation()


    //const dateFormated = format(date, "dd/MM/yyyy HH:mm")

    /*     const {
            date,
            nb_couverts,
            step,
            changeStep,
        } = props; */

    if (step === 1) {
        console.log('step 1');
        return (
            <>
                <StepsCurrent goToStep={1} text={'Date :'} data={dateFormated} ></StepsCurrent>
                <StepsNext goToStep={2} text={'Nombre de couverts'} data={nb_couverts}></StepsNext>
                <StepsNext goToStep={3}></StepsNext>
            </>
        )

    } else if (step === 2) {
        console.log('step 2');
        return (
            <>
                <StepsCurrent goToStep={1} text={'Date :'} data={dateFormated} ></StepsCurrent>
                <StepsNext goToStep={2} text={'Nombre de couverts'} data={nb_couverts}></StepsNext>
                <StepsNext goToStep={3}></StepsNext>
            </>
        )
    } else if (step === 3) {
        console.log('step 3');
        return (
            <>
                <StepsChecked goToStep={1} text={'Date :'} data={dateFormated} ></StepsChecked>
                <StepsCurrent goToStep={2} text={'Nombre de couverts'} data={nb_couverts} ></StepsCurrent>
                <StepsNext goToStep={3} ></StepsNext>
            </>
        )
    }
    else if (step === 4) {
        console.log('step 4');
        return (
            <>
                <StepsChecked goToStep={1} text={'Date :'} data={dateFormated} ></StepsChecked>
                <StepsChecked goToStep={2} text={'Nombre de couverts'} data={nb_couverts}></StepsChecked>
                <StepsCurrent goToStep={3} text={'Informations'} data={''} ></StepsCurrent>
            </>
        )
    }
}



export const StepsChecked = (props: any) => {
    const { date, nb_couverts, step, updateNbCouverts, updateStep } = useFormReservation()
    const {
        text,
        data,
        goToStep,
        changeStep
    } = props;


    return (
        <li className="relative overflow-hidden lg:flex-1 ">
            <div className="overflow-hidden rounded-t-md border-gray-100 border border-b-0 lg:border-0">
                <div onClick={() => updateStep(goToStep)}>
                    <span className=" absolute left-0 top-0 h-full w-1 bg-transparent lg:bottom-0 lg:top-auto lg:h-1 lg:w-full" aria-hidden="true"></span>
                    <span className="flex items-start px-6 py-5 text-sm font-medium">
                        <span className="shrink-0">
                            <span className="flex h-10 w-10 justify-center items-center rounded-full bg-indigo-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-opacity-100 text-white"><path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"></path></svg>
                            </span>
                        </span>
                        <span className="flex flex-col min-w-0 mt-0.5 ml-4">
                            <span className="text-sm font-medium">{text}</span>
                            <span className="text-sm font-medium text-gray-500">{data}</span>
                        </span>

                    </span>
                </div>
            </div>
        </li>
    );
};

export const StepsCurrent = (props: any) => {
    const { date, nb_couverts, step, updateNbCouverts, updateStep } = useFormReservation()
    const {
        text,
        data,
        goToStep,
        changeStep
    } = props;
    return (
        <li className="relative overflow-hidden lg:flex-1 ">
            <div className="overflow-hidden border  border-gray-100  lg:border-0">
                <div onClick={() => updateStep(goToStep)} >
                    <span className=" absolute left-0 top-0 h-full w-1 bg-indigo-500 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"></span>
                    <span className="flex items-start px-6 py-5 text-sm font-medium">
                        <span className="shrink-0">
                            <span className="flex h-10 w-10 justify-center items-center rounded-full border-2 border-indigo-500">
                                <span className="text-indigo-500">{goToStep}</span>
                            </span>
                        </span>
                        <span className="flex flex-col min-w-0 mt-0.5 ml-4">
                            <span className="text-sm font-medium">{text}</span>
                            <span className="text-sm font-medium text-gray-500">{data}</span>
                        </span>

                    </span>
                </div>
                <div className=" absolute inset-0 left-0 top-0 hidden w-3 lg:block">
                    <svg className="w-full h-full text-gray-100" viewBox="0 0 12 82" fill="none" preserveAspectRatio="none"><path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke"></path></svg>
                </div>
            </div>
        </li>
    )
};

export const StepsNext = (props: any) => {
    const { date, nb_couverts, step, updateNbCouverts, updateStep } = useFormReservation()
    const {
        text,
        data,
        goToStep,
        changeStep
    } = props;
    return (
        <li className="relative overflow-hidden lg:flex-1 ">
            <div className="overflow-hidden rounded-b-md border  border-t-0 border-gray-100  lg:border-0">
                <div onClick={() => updateStep(goToStep)}>
                    <span className=" absolute left-0 top-0 h-full w-1 bg-transparent lg:bottom-0 lg:top-auto lg:h-1 lg:w-full" aria-hidden="true"></span>
                    <span className="flex items-start px-6 py-5 text-sm font-medium">
                        <span className="shrink-0">
                            <span className="flex h-10 w-10 justify-center items-center rounded-full border-2 border-gray-100">
                                <span className="text-gray-500">{goToStep}</span>
                            </span>
                        </span>
                        <span className="flex flex-col min-w-0 mt-0.5 ml-4">
                            <span className="text-sm font-medium">{text}</span>
                            <span className="text-sm font-medium text-gray-500">{data}</span>
                        </span>

                    </span>
                </div>
                <div className=" absolute inset-0 left-0 top-0 hidden w-3 lg:block">
                    <svg className="w-full h-full text-gray-100" viewBox="0 0 12 82" fill="none" preserveAspectRatio="none"><path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke"></path></svg>
                </div>
            </div>
        </li>
    )
};
