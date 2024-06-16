"use client"

import FormEdit from "@/components/FormEdit";
import Header from "@/components/Header";

const EditMotor = () => {
    return (
        <main className=" flex flex-col justify-center items-center">
            <div className="container mt-4 ">
                <Header />
            </div>
            <section className="container border-b border-[#CAC9CD] py-5 flex justify-between">
                <h2 className="text-[#CAC9CD] text-[25px] font-semibold">Editar</h2>
            </section>

            <div>
                <FormEdit/>
            </div>
        </main>
    )
}

export default EditMotor;