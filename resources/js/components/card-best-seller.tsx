import { Plus } from 'lucide-react';
import bestSellerImage from '@/assets/chicken-burger.jpg';
import type { MenuType } from '@/types/menu';

interface CardBestSellerProps {
    menu: MenuType;
}

const CardBestSeller = ({ menu }: CardBestSellerProps) => {
    const menuName = menu.name.split(' ');
    const firstWords = menuName[0];
    const remainingWords = menuName[1];

    return (
        <div className="flex group relative h-full w-full flex-col items-center justify-between overflow-hidden rounded-3xl bg-white pt-6 font-hanken shadow-md shadow-black/10 transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-black/20">
            <div className="h-40 w-40 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:-translate-y-3 overflow-hidden rounded-full p-1 shadow-lg shadow-black/20">
                <img
                    src={bestSellerImage}
                    alt="chicken-burger"
                    className="h-full w-full rounded-full object-cover object-center"
                />
            </div>

            <div className="absolute top-50 transition-all duration-500 ease-in-out group-hover:rotate-0 left-6 shadow-lg shadow-black/20 -rotate-18 rounded-lg bg-primary px-3 py-1">
                <p className="text-neutral font-bold text-sm">Rp. {menu.price}k</p>
            </div>

            <div className="mt-8 px-5 text-center">
                <h1 className="flex group-hover:text-primary transition-all duration-500 ease-in-out flex-col text-dark">
                    <span className="text-3xl font-bold">{firstWords}</span>
                    <span className="font-playfair text-2xl italic">
                        {remainingWords}
                    </span>
                </h1>
                <p className="mx-auto mt-4 w-[80%] text-sm text-secondary">
                    {menu.description}
                </p>
            </div>
            <div className="px-5 pb-8">
                <button className="mt-10 transition-all duration-500 ease-in-out hover:bg-primary flex w-full items-center justify-center gap-2 rounded-full bg-dark p-3.5 text-neutral">
                    <Plus />
                </button>
            </div>
        </div>
    );
};

export default CardBestSeller;
