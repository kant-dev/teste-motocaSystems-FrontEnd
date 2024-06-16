"use client"

import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Avatar from "@/assets/svgs/avatar.svg"
import Image from "next/image";

const  Header = () => {
  return (
    <main className=" flex flex-col justify-center items-center">
        <div className="w-full flex items-end gap-3 justify-end">
          <FontAwesomeIcon  icon={faHouse} className="w-[33px] h-[28px]  text-[#CAC9CD]  mb-1 hover:cursor-pointer"/>

          <div className="rounded-full flex items-center justify-center hover:cursor-pointer">
                        <Image src={Avatar} alt="avartar" className="rounded-full w-[44px]"/>
                        <div className="w-[11px] h-[11px] bg-[#04F81C] rounded-full z-10 relative right-4 top-4 border-2 border-[#312D4B]"></div>
                    </div>
        </div>
    </main>

  );
}


export default Header;