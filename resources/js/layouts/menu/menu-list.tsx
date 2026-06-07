import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import CardCategory from '@/components/card-category';
import CardMenu from '@/components/card-menu';
import type { CategoryType } from '@/types/category';
import type { MenuType } from '@/types/menu';

interface PageProps {
    menus: MenuType[];
    categories: CategoryType[];
    [key: string]: any;
}

const MenuListSection = () => {
    const { props } = usePage();
    const { menus, categories } = props as unknown as PageProps;
    const [filterByCategory, setFilterByCategory] = useState<number | null>(
        null,
    );

    const filterMenu = filterByCategory
        ? menus.filter((item) => item.category?.id === filterByCategory)
        : menus;

    return (
        <div className="mt-15 h-auto w-full font-hanken">
            {/* Category */}
            <div className="hide-scrollbar flex w-full items-center gap-4 overflow-x-auto rounded-full px-4 py-6">
                <button
                    onClick={() => setFilterByCategory(null)}
                    className={`${filterByCategory === null ? 'bg-primary' : 'bg-dark'} z-99 flex aspect-square h-13 w-40 shrink-0 items-center justify-center rounded-full text-center font-bold text-neutral shadow-lg shadow-black/20 transition-all duration-500 ease-in-out hover:-translate-y-1`}
                >
                    <h1>All</h1>
                </button>
                {categories.map((item) => (
                    <CardCategory
                        key={item.id}
                        name={item.name}
                        id={item.id}
                        isActive={filterByCategory}
                        onClick={() => setFilterByCategory(item.id as number)}
                    />
                ))}
            </div>

            {/* Menu */}
            <div className="mt-15 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filterMenu.map((item) => (
                    <CardMenu key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default MenuListSection;
