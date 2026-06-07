import { Link, usePage } from '@inertiajs/react';
import CardBestSeller from '@/components/card-best-seller';
import type { MenuType } from '@/types/menu';

interface PageProps {
    bestSellers: MenuType[];
    [key: string]: any;
}

const BestSellerSection = () => {
    const { props } = usePage();
    const { bestSellers } = props as unknown as PageProps;

    return (
        <div className="mt-25 font-hanken">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl md:text-4xl font-bold text-dark">
                    Our Best Sellers
                </h1>
                <Link href={"/menu"} className="text-primary hover:underline">See All Menu</Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {bestSellers.map((menu: MenuType) => (
                    <CardBestSeller
                        key={menu.id}
                        menu={menu}
                    />
                ))}
            </div>
        </div>
    );
};

export default BestSellerSection;
