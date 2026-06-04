import { Plus } from 'lucide-react';
import bestSellerImage from '@/assets/chicken-burger.jpg';
import type { MenuType } from '@/types/menu';

interface CardBestSellerProps {
    menu: MenuType;
}

const CardBestSeller = ({ menu }: CardBestSellerProps) => {
    return (
        <div className="flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl bg-white font-hanken shadow-lg shadow-black/20">
            <img
                src={bestSellerImage}
                alt="chicken-burger"
                className="h-60 w-full object-cover object-center"
            />

            <div className="px-5">
                <div className="mt-4 flex items-center justify-between font-bold">
                    <h1 className="text-2xl text-dark">{menu.name}</h1>
                    <h2 className="text-lg text-primary">Rp. {menu.price}K</h2>
                </div>
                <p className="mt-2 text-secondary">{menu.description}</p>
            </div>
            <div className="px-5 pb-8">
                <button className="mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-2">
                    <span>
                        <Plus />
                    </span>
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default CardBestSeller;
