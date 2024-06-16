"use client"

import Seach  from '@/assets/svgs/search.svg'
import Image from "next/image";

interface InputFilterProps {
    placeholder?: string;
}

const InputFilter = ({placeholder}: InputFilterProps) => {
    return(
        <div className="w-[385px] h-[35px] rounded-md border border-[#CAC9CD] flex items-center ">
            <Image src={Seach} alt="Icon Search" className="ml-3 w-[14px] h-[14px]"/>
            <input type="text" placeholder={placeholder} className="ml-2 bg-transparent w-full text-xs focus:outline-none focus:border-none text-[#CAC9CD]" />
        </div>
    )
}

export default InputFilter;