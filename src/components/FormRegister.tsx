"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import {FaPlus} from "react-icons/fa"

import InputForms from "./ui/InputForms";
import TitileForm from "./ui/TitleForm";

const FormRegister = () => {
    const router = useRouter()

    const [formData, setFormData] = useState({
        code: '',
        model: '',
        status: '',
        price: '',
        color: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Enviar os dados para o json-server
        await fetch('http://localhost:3001/motos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData) 
        });

        router.push('/');
    };
    

    return(
        <div className="mt-10">
            <TitileForm 
                title="Preencha as informações a baixo para registrar uma Moto 🏍️" 
                className="font-semibold text-[25px]"
            />
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center mt-5">
                <InputForms 
                        type="text" 
                        name="code" 
                        value={formData.code} 
                        onChange={handleChange} 
                        placeholder="" 
                        className="bg-transparent ml-[-40px]"  
                        labeltext="Código" 
                        labelstyle="font-medium text-[13px]  w-[56px] h-[13px] relative bottom-[10px] left-[15px] bg-[#2A233C] text-[#E7E3FC50]"
                    />

                    <InputForms     
                        type="text" 
                        name="model" 
                        value={formData.model } 
                        onChange={handleChange} 
                        placeholder="" 
                        className="bg-transparent ml-[-95px] placeholder:text-[#CEC9CD]  text-[#CEC9CD]"  
                        labeltext="Modelo de Moto" 
                        labelstyle="font-medium text-[13px]  w-[115px] h-[13px] relative bottom-[10px] left-[15px] bg-[#2A233C] text-[#CEC9CD]"
                    />

                    <InputForms     
                        type="text" 
                        name="color" 
                        value={formData.color } 
                        onChange={handleChange} 
                        placeholder="" 
                        className="bg-transparent ml-[-20px]  placeholder:text-[#CEC9CD]  text-[#CEC9CD]"  
                        labeltext="Cor" 
                        labelstyle="font-medium text-[13px]  w-[38px] h-[13px] relative bottom-[10px] left-[15px] bg-[#2A233C] text-[#CEC9CD]"
                    />

                    <InputForms     
                        type="text" 
                        name="price" 
                        value={formData.price } 
                        onChange={handleChange} 
                        placeholder="" 
                        className="bg-transparent ml-[-28px]  placeholder:text-[#CEC9CD]  text-[#CEC9CD]"  
                        labeltext="Valor" 
                        labelstyle="font-medium text-[13px]  w-[48px] h-[13px] relative bottom-[10px] left-[15px] bg-[#2A233C] text-[#CEC9CD]"
                    />

                    <InputForms     
                        type="select" 
                        name="status" 
                        value={formData.status } 
                        onChange={handleChange} 
                        options={['Em estoque', 'Sem estoque', 'Em trânsito']}
                        className="bg-transparent ml-[-35px]  placeholder:text-[#CEC9CD]  text-[#CEC9CD]"  
                        labeltext="Status" 
                        labelstyle="font-medium text-[13px]  w-[38px] h-[13px] relative bottom-[10px] left-[15px] bg-[#2A233C] text-[#CEC9CD]"
                    />

                    <button type="submit" className="w-[418px] h-[45px] bg-[#3BADFB] mt-5 rounded-[5px] flex items-center justify-center gap-3">
                        <FaPlus/>
                        <span className="text-[14px] font-semibold">Registrar</span>
                    </button>

            </form>
        </div>
    )
}

export default FormRegister;