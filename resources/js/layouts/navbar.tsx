import { Search, User, ShoppingCart } from 'lucide-react';
import NavLink from '@/components/navlink';
import { useMenu } from '@/contexts/menu-context';

const Navbar = () => {
    const { toggleMenu } = useMenu();

    return (
        <div className="mt-5 flex w-full items-center justify-between rounded-2xl bg-dark px-4 py-3 shadow-lg shadow-black/30">
            <div>
                <h1 className="font-hanken text-2xl font-bold">Burgerin</h1>
            </div>
            <div className='hidden lg:block'>
                <NavLink />
            </div>
            <div className="flex items-center justify-center space-x-3 lg:space-x-4">
                <span>
                    <ShoppingCart />
                </span>
                <span>
                    <User />
                </span>
                <span>
                    <Search />
                </span>
                <button
                    onClick={toggleMenu}
                    className="flex flex-col lg:hidden items-end justify-center"
                >
                    <div className="h-0.5 w-8 bg-white"></div>
                    <div className="mt-2 h-0.5 w-5 bg-white"></div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
