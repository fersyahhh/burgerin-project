import type { CategoryType } from './category';

export interface MenuType {
    id: number;
    category_id: number;
    name: string;
    slug: string;
    description: string;
    price: number;
    image: string;
    is_available: boolean;
    is_best_seller: boolean;
    category?: CategoryType;
}
