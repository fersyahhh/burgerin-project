import { Plus } from 'lucide-react';
import bestSellerImage from '@/assets/chicken-burger.jpg';
import type { MenuType } from '@/types/menu';

const CardMenu = ({ name, price, description }: MenuType) => {
    const menuName = name.split(' ');
    const firstWords = menuName[0];
    const remainingWords = menuName[1];

    return (
        <div className="group relative flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-3xl bg-white pt-6 font-hanken shadow-md shadow-black/10 transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-black/20">
            <div className="h-40 w-40 overflow-hidden rounded-full p-1 shadow-lg shadow-black/20 transition-all duration-500 ease-in-out group-hover:-translate-y-3 group-hover:scale-105">
                <img
                    src={bestSellerImage}
                    alt="chicken-burger"
                    className="h-full w-full rounded-full object-cover object-center"
                />
            </div>

            <div className="absolute top-50 left-6 -rotate-18 rounded-lg bg-primary px-3 py-1 shadow-lg shadow-black/20 transition-all duration-500 ease-in-out group-hover:rotate-0">
                <p className="text-sm font-bold text-neutral">Rp. {price}k</p>
            </div>

            <div className="mt-8 px-5 text-center">
                <h1 className="flex flex-col text-dark transition-all duration-500 ease-in-out group-hover:text-primary">
                    <span className="text-3xl font-bold">{firstWords}</span>
                    <span className="font-playfair text-2xl italic">
                        {remainingWords}
                    </span>
                </h1>
                <p className="mx-auto mt-4 w-[80%] text-sm text-secondary">
                    {description}
                </p>
            </div>
            <div className="px-5 pb-8">
                <button className="mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-dark p-3.5 text-neutral transition-all duration-500 ease-in-out hover:bg-primary">
                    <Plus />
                </button>
            </div>
        </div>
    );
};

export default CardMenu;
