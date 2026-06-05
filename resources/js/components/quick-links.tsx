import { Link } from '@inertiajs/react';

const QuickLinks = () => {
    return (
        <div className="justify-center lg:flex-none lg:ml-0 md:ml-10 md:flex">
            <div>
                <header>
                    <h1 className="font-bold md:text-xl uppercase">Quick Links</h1>
                </header>
                <div className="mt-3 flex flex-col text-slate-300">
                    <Link className="pb-3 font-playfair text-sm lg:text-base">
                        Home
                    </Link>
                    <Link className="pb-3 font-playfair text-sm lg:text-base">
                        Menu
                    </Link>
                    <Link className="pb-3 font-playfair text-sm lg:text-base">
                        Offers
                    </Link>
                    <Link className="pb-3 font-playfair text-sm lg:text-base">
                        Location
                    </Link>
                    <Link className="pb-3 font-playfair text-sm lg:text-base">
                        About
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default QuickLinks;
