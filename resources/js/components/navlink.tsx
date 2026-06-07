import { Link } from '@inertiajs/react';

const NavLink = () => {
    return (
        <nav className="mt-4 flex flex-col gap-4 lg:flex-row lg:gap-8">
            <Link className="border-b border-white/15 pb-3 font-hanken text-lg lg:border-none lg:text-base">
                Home
            </Link>
            <Link
                href="/menu"
                className="border-b border-white/15 pb-3 font-hanken text-lg lg:border-none lg:text-base"
            >
                Menu
            </Link>
            <Link className="border-b border-white/15 pb-3 font-hanken text-lg lg:border-none lg:text-base">
                Offers
            </Link>
            <Link className="border-b border-white/15 pb-3 font-hanken text-lg lg:border-none lg:text-base">
                Location
            </Link>
            <Link className="border-b border-white/15 pb-3 font-hanken text-lg lg:border-none lg:text-base">
                About
            </Link>
        </nav>
    );
};

export default NavLink;
