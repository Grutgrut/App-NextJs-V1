
import { TServiceCustomData, TServicesData } from "@/types";
import { create } from "zustand";

export type State = {
    services: TServicesData | null;
    service_custom: TServiceCustomData | null;
    date: any;
    dateFormated: any;
    step: number;
    nb_couverts: number;
    is_wonder: boolean;
}


type Action = {
    setServices: (services: State['services']) => void
    setServiceCustom: (service_custom: State['service_custom']) => void
    updateDate: (date: State['date']) => void
    updateDateFormated: (date: State['dateFormated']) => void
    updateStep: (step: State['step']) => void
    updateNbCouverts: (nb_couverts: State['nb_couverts']) => void
    updateIsWonder: (is_wonder: State['is_wonder']) => void

}


// Create your store, which includes both state and (optionally) actions
export const useFormReservation = create<State & Action>((set) => ({
    services: null,
    setServices: (services) => set(() => ({ services: services })),
    service_custom: null,
    setServiceCustom: (service_custom) => set(() => ({ service_custom: service_custom })),
    date: new Date(),
    updateDate: (newDate) => set(() => ({ date: newDate })),
    dateFormated: '',
    updateDateFormated: (newDateFormated) => set(() => ({ dateFormated: newDateFormated })),
    step: 1,
    updateStep: (step) => set(() => ({ step: step })),
    nb_couverts: 0,
    updateNbCouverts: (nb_couverts) => set(() => ({ nb_couverts: nb_couverts })),
    is_wonder: false,
    updateIsWonder: (is_wonder) => set(() => ({ is_wonder: is_wonder })),
}))

/* export const useServiceRequest = leitenRequest(useModeStore, "modes", async () => {
    return API.get(`/acquisition-modes`);
  }); */