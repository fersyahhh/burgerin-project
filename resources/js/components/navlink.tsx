import { Link } from '@inertiajs/react';
import { useMenu } from '@/contexts/menu-context';

const NavLink = () => {
    const { closeMenu } = useMenu();

    return (
        <nav className="mt-4 flex flex-col gap-4 lg:flex-row lg:gap-8">
            <Link
                onClick={closeMenu}
                href={'/'}
                className="border-b border-white/15 pb-3 font-hanken text-lg lg:border-none lg:text-base"
            >
                Home
            </Link>
            <Link
                onClick={closeMenu}
                href={'/menu'}
                className="border-b border-white/15 pb-3 font-hanken text-lg lg:border-none lg:text-base"
            >
                Menu
            </Link>
            <Link
                onClick={closeMenu}
                className="border-b border-white/15 pb-3 font-hanken text-lg lg:border-none lg:text-base"
            >
                Offers
            </Link>
            <Link
                onClick={closeMenu}
                className="border-b border-white/15 pb-3 font-hanken text-lg lg:border-none lg:text-base"
            >
                Location
            </Link>
            <Link
                onClick={closeMenu}
                className="border-b border-white/15 pb-3 font-hanken text-lg lg:border-none lg:text-base"
            >
                About
            </Link>
        </nav>
    );
};

export default NavLink;
