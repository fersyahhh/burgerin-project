import { X } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import CardCartMenu from "./card-cart-menu";

const CardCart = () => {
    const {totalMenu} = useCart();

    return (
        <div className="fixed right-0 z-999 flex flex-col top-0 h-screen w-[70%] p-4 bg-white font-hanken shadow-lg shadow-black/20">
            <header className="text-dark font-bold flex items-center justify-between shrink-0">
                <h1 className="text-xl">My Shopping Cart ({totalMenu})</h1>
                <button className="mt-1">
                    <X />
                </button>
            </header>

            <main className="mt-10 flex flex-col gap-10 overflow-y-auto flex-1">
                <CardCartMenu />
                <CardCartMenu />
                <CardCartMenu />
                <CardCartMenu />
                <CardCartMenu />
                <CardCartMenu />
            </main>
        </div>
    );
};

export default CardCart;
