import { Link, usePage } from '@inertiajs/react';
import { Search, User, ShoppingCart } from 'lucide-react';
import NavLink from '@/components/navlink';
import { useCart } from '@/contexts/cart-context';
import { useMenu } from '@/contexts/menu-context';

const Navbar = () => {
    const { toggleMenu } = useMenu();
    const { auth } = usePage().props as any;
    const { totalMenu, openCart } = useCart();

    console.log(auth);

    return (
        <div className="mt-5 flex w-full items-center justify-between rounded-2xl bg-dark px-4 py-3 shadow-lg shadow-black/30">
            <div>
                <h1 className="font-hanken text-2xl font-bold">
                    Burgerin<span className="text-primary">.</span>
                </h1>
            </div>
            <div className="hidden lg:block">
                <NavLink />
            </div>
            <div className="flex items-center justify-center space-x-3 lg:space-x-4">
                <Link onClick={openCart} className="relative">
                    {totalMenu !== 0 && (
                        <div className="absolute -top-2.5 -right-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold">
                            {totalMenu}
                        </div>
                    )}
                    <ShoppingCart />
                </Link>
                {!auth?.user && (
                    <Link href={'/login'}>
                        <User />
                    </Link>
                )}
                <Link>
                    <Search />
                </Link>
                <button
                    onClick={toggleMenu}
                    className="flex flex-col items-end justify-center lg:hidden"
                >
                    <div className="h-0.5 w-8 bg-white"></div>
                    <div className="mt-2 h-0.5 w-5 bg-white"></div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
