"use client";

import {FaPlus} from 'react-icons/fa'
import ButtonComponent from "./ui/Button";
import InputFilter from "./ui/InputFilter";

const TopMain = () =>{

    return (
        <section className="container border-b border-[#CAC9CD] py-5 flex justify-between">
            <h2 className="text-[#CAC9CD] text-[25px] font-semibold">Tabela de Motos</h2>
            <div className="flex gap-3 items-center justify-end w-auto">
                <InputFilter placeholder="Buscar por codigo, nome e cor"/>
                <ButtonComponent
                    icon={<FaPlus />}
                    text="Novo Registro"
                    href="/registermotor"
                />
            </div>
        </section>
    )
}

export default TopMain;