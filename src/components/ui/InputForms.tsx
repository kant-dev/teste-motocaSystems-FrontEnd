"use client"

import React from 'react';

interface InputProps {
    type: string;
    name: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    placeholder?: string;
    className?: string;
    labeltext?: string; // dar o texto da label
    labelstyle?: string; // dar o estilo da label 
    options?: string[]; // Para campos do tipo select
}

const InputForms = ({ type, name, value, onChange, placeholder, className, options, labeltext, labelstyle}: InputProps) => {
    if (type === 'select' && options) {
        return (
            <div className='border border-[#E7E3FC50] mt-5  w-[420px] h-[45px] flex rounded-[5px]'>
                <label htmlFor={name} className={labelstyle}>
                    {labeltext}
                </label>
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`p-2 border-none outline-none w-full h-full rounded ml-[-20px]  text-[#CEC9CD] bg-[#2a233c] hover:bg-gray-800' ${className}`}
                >
                    <option value="" >Selecione</option>
                    {options.map((option) => (
                        <option key={option} value={option} >{option}</option>
                    ))}
                </select>
            </div>
        );
    }

    return (
        <div className="border border-[#E7E3FC50] mt-5  w-[420px] h-[45px] flex rounded-[5px]">
            <label htmlFor={name} className={labelstyle}>
                {labeltext}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={` ml-[-20px] text-[#E7E3FC50] rounded ${className} w-full h-full focus:outline-1 focus:border focus:border-[#E7E3FC50] border-none outline-none placeholder:font-medium`}
            />
        </div>
    );
};

export default InputForms;
