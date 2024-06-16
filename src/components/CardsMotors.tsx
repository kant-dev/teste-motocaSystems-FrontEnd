import Image from "next/image";
import Eye from '@/assets/svgs/eyes.svg';
import Trash from "@/assets/svgs/trash-red.svg";
import Loading from "@/assets/svgs/loading.svg"; // Ícone de carregamento
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Moto {
    id: string;
    code: string;
    model: string;
    status: string;
    price: string;
    color: string;
}

const CardsMotors = () => {
    const router = useRouter();

    const [motos, setMotos] = useState<Moto[]>([]);
    const [loadingId, setLoadingId] = useState<string | null>(null); 

    useEffect(() => {
        fetch('http://localhost:3001/motos')
            .then(response => response.json())
            .then(data => setMotos(data));
    }, []);

    const deleteMoto = async (id: string) => {
        setLoadingId(id); 
        try {
            await fetch(`http://localhost:3001/motos/${id}`, { method: 'DELETE' });
            setMotos(motos.filter(moto => moto.id !== id));
        } catch (error) {
            console.error('Failed to delete:', error);
        } finally {
            setLoadingId(null);
        }
    };

    const handleEdit = (id: string) => {
        router.push(`/editmotor/${id}`); 
    };

    const getStatusClass = (status: string) => {
        switch (status) {
            case 'Em estoque':
                return 'bg-[#354546] rounded-[35px] w-[111px] h-[25px] text-center font-medium text-[15px] text-[#56CA00] flex items-center justify-center'; 
            case 'Sem estoque':
                return 'bg-[#55304C] rounded-[35px] w-[111px] h-[25px] text-center font-medium text-[15px] text-[#FF4C51] flex items-center justify-center';
            case 'Em trânsito':
                return 'bg-[#544146] rounded-[35px] w-[111px] h-[25px] text-center font-medium text-[15px] text-[#FFB400] flex items-center justify-center';
            default:
                return '';  
        }
    };

    return (
        <section className="mt-8">
            {motos.map((moto) => (
                <div key={moto.id} className="flex justify-between items-center bg-[#312D4B] p-3 rounded-xl text-white h-[134px] mt-5">
                    <div className="w-2/12 flex justify-center items-center">
                        <p className="font-medium text-lg text-[#8C57FF]">{moto.code}</p>
                    </div>
                    <div className="w-9/12 pl-4 gap-y-2 flex flex-col">
                        <div className="flex gap-4">
                            <p className="font-semibold text-[17px]">{moto.model}</p>
                            <span className={`rounded-[35px] w-[111px] h-[25px] text-center font-medium text-[15px] flex items-center justify-center ${getStatusClass(moto.status)}`}>
                                {moto.status}
                            </span>
                        </div>
                        <div>
                            <p className="font-medium text-[15px]">Valor: R$ <span>{moto.price}</span></p>
                        </div>
                        <div>
                            <p className="font-medium text-[15px]">Cor: <span>{moto.color}</span></p>
                        </div>
                    </div>
                    <div className="w-1/12 flex items-center justify-center gap-3">
                        <Image
                            src={loadingId === moto.id ? Loading : Trash} 
                            alt={loadingId === moto.id ? "Ícone de carregamento" : "Ícone de lixeira"}
                            className="hover:cursor-pointer"
                            onClick={() => deleteMoto(moto.id)}
                        />
                        <Image
                            src={Eye}
                            alt="Ícone de olhos"
                            className="hover:cursor-pointer"
                            onClick={() => handleEdit(moto.id)}
                        />
                    </div>
                </div>
            ))}
        </section>
    );
};

export default CardsMotors;
