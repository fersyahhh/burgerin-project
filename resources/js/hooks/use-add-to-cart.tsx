import { useCart } from '@/contexts/cart-context';
import type { CartItem } from '@/types/cart';
import type { MenuType } from '@/types/menu';

export function useAddToCart(menus?: MenuType[], bestSeller?: MenuType[]) {
    const { setDataMenu } = useCart();

    function handleAddToCart(id: number) {
        const selectedMenu =
            menus?.find((item) => item.id === id) ||
            bestSeller?.find((item) => item.id === id);

        if (!selectedMenu) {
            return;
        }

        setDataMenu((prevData: CartItem[]) => {
            const isExist = prevData.find((item) => item.id === id);

            if (isExist) {
                return prevData.map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                );
            }

            return [...prevData, { ...selectedMenu, quantity: 1 } as CartItem];
        });
    }

    return { handleAddToCart };
}
