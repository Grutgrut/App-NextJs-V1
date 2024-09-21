import { Stepper } from "./stepper"
import FormStep from "./form-step";
import Showform from "./showform";

import { getServices, getServiceCustom } from "@/lib/datas"
import { log } from 'console';

async function Reservation() {
    const service_custom = await getServiceCustom();
    const services = await getServices();

    return (
        <>
            <div className="">
                <div className="py-4 lg:py-12">
                    <div className="lg:border-gray-100 lg:border-t lg:border-b">
                        <nav className="max-w-7xl px-4  sm:px-6 lg:px-8 mx-auto">
                            <ol className="overflow-hidden rounded-md lg:flex lg:border-gray-100 lg:border-r lg:border-l lg:rounded-none">
                                <Stepper></Stepper>
                            </ol>
                        </nav>
                        <div className="w-10 flex-none"></div>
                    </div>
                </div>
            </div>
            <section className="flex justify-center items-center mx-auto">
                <FormStep service_custom={service_custom} services={services}></FormStep>
                {/* <Showform></Showform> */}
            </section>

        </>
    )

}


export default Reservation;
