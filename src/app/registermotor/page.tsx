"use client"

import FormRegister from "@/components/FormRegister";
import Header from "@/components/Header";

const RegisterMotor = () => {
    return (
        <main className=" flex flex-col justify-center items-center">
            <div className="container mt-4 ">
                <Header />
            </div>
            <section className="container border-b border-[#CAC9CD] py-5 flex justify-between">
                <h2 className="text-[#CAC9CD] text-[25px] font-semibold">Registrar Moto</h2>
            </section>

            <div>
                <FormRegister/>
            </div>
        </main>
    )
}

export default RegisterMotor;