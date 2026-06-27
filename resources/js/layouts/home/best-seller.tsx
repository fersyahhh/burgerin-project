import { Link, usePage } from '@inertiajs/react';
import CardBestSeller from '@/components/card-best-seller';
import { useAddToCart } from '@/hooks/use-add-to-cart';
import type { MenuType } from '@/types/menu';

interface PageProps {
    bestSellers: MenuType[];
    [key: string]: any;
}

const BestSellerSection = () => {
    const { props } = usePage();
    const { bestSellers } = props as unknown as PageProps;
    const { handleAddToCart } = useAddToCart(bestSellers);

    return (
        <div className="mt-25 font-hanken">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-dark md:text-4xl">
                    Our Best Sellers
                </h1>
                <Link href={'/menu'} className="text-primary hover:underline">
                    See All Menu
                </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {bestSellers.map((menu: MenuType) => (
                    <CardBestSeller
                        key={menu.id}
                        menu={menu}
                        addCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default BestSellerSection;
