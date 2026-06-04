import { Link } from "@inertiajs/react";

const NavLink = () => {
    return (
        <nav className="mt-4 flex flex-col lg:flex-row lg:gap-8 gap-4">
            <Link className="border-b border-white/15 pb-3 font-hanken lg:text-base text-lg lg:border-none">
                Home
            </Link>
            <Link className="border-b border-white/15 pb-3 font-hanken lg:text-base text-lg lg:border-none">
                Menu
            </Link>
            <Link className="border-b border-white/15 pb-3 font-hanken lg:text-base text-lg lg:border-none">
                Offers
            </Link>
            <Link className="border-b border-white/15 pb-3 font-hanken lg:text-base text-lg lg:border-none">
                Location
            </Link>
            <Link className="border-b border-white/15 pb-3 font-hanken lg:text-base text-lg lg:border-none">
                About
            </Link>
        </nav>
    );
}

export default NavLink;