import { Link } from '@inertiajs/react';

const LegalFooter = () => {
    return (
        <div className='lg:ml-10 xl:ml-20'>
            <header>
                <h1 className="font-bold md:text-xl uppercase">Legal</h1>
            </header>
            <div className="mt-3 flex flex-col text-slate-300">
                <Link className="pb-3 font-playfair text-sm lg:text-base">
                    Privacy Policy
                </Link>
                <Link className="pb-3 font-playfair text-sm lg:text-base">
                    Terms Of Service
                </Link>
            </div>
        </div>
    );
};

export default LegalFooter;
