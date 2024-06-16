'use client';

import Link from 'next/link';
import React, { ReactNode } from 'react';

interface ButtonComponentProps {
    icon: ReactNode;
    text: string;
    href: string;
    onClick?: () => void; // onClick é opcional
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ icon, text, href, onClick }) => {
    return (
        <button className='bg-[#3BADFB]  w-[142px] h-[34px] rounded-[5px] text-white gap-2 flex items-center justify-center'>
            {icon}
            <Link href={href} className='text-[12px] font-semibold'>
                {text}
            </Link>
        </button>
    );
};

export default ButtonComponent;
