import { ArrowRight, X } from 'lucide-react';
import { useCart } from '@/contexts/cart-context';
import CardCartMenu from './card-cart-menu';

const CardCart = () => {
    const { totalMenu } = useCart();
    const { isCart, closeCart } = useCart();

    return (
        <div
            className={`${isCart ? 'translate-0' : 'translate-x-150'} fixed top-0 right-0 z-999 lg:w-[30%] md:w-1/2 flex h-screen w-[70%] flex-col bg-white p-4 font-hanken shadow-lg shadow-black/20 transition-all duration-500 ease-in-out`}
        >
            <header className="flex shrink-0 items-center justify-between font-bold text-dark">
                <h1 className="text-xl">My Shopping Cart ({totalMenu})</h1>
                <button onClick={closeCart} className="mt-1">
                    <X />
                </button>
            </header>

            <main className="mt-10 flex flex-1 flex-col gap-10 overflow-y-auto">
                <CardCartMenu />
                <CardCartMenu />
                <CardCartMenu />
                <CardCartMenu />
                <CardCartMenu />
                <CardCartMenu />
            </main>

            <footer className="flex flex-col gap-1.5 pt-4 text-dark">
                <div className="flex items-center justify-between">
                    <p>Subtotal</p>
                    <p>Rp 200k</p>
                </div>
                <div className="flex items-center justify-between">
                    <p>Shipping</p>
                    <p>Rp 10k</p>
                </div>
                <div>
                    <div className="flex items-center justify-between text-xl font-bold">
                        <p>Total</p>
                        <p>Rp 210k</p>
                    </div>
                    <button className="mx-auto mt-4 flex w-full items-center justify-center space-x-2 rounded-xl bg-primary px-4 py-2.5 font-bold text-neutral">
                        <span>Processed to Checkout</span>
                        <span>
                            <ArrowRight className="h-5 w-5" />
                        </span>
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default CardCart;
