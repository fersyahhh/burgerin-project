import CardCart from '@/components/card-cart';
import CardNavlink from '@/components/card-navlink';
import { useMenu } from '@/contexts/menu-context';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const { isOpen, closeMenu } = useMenu();

    return (
        <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
            {/* Backdrop */}
            <div
                onClick={closeMenu}
                className={`${isOpen == true ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} absolute inset-0 z-998 w-full bg-black/50 transition-all duration-300 ease-in-out`}
            ></div>

            {/* Card NavLink On Mobile/Tablet Device */}
            <div
                className={`${isOpen == true ? 'right-0' : '-right-full'} fixed top-0 z-999 w-[80%] transition-all duration-300 ease-in-out md:w-1/2`}
            >
                <CardNavlink />
            </div>

            {/* Cart Cart */}
            <CardCart />

            {/* Main Content */}
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;
