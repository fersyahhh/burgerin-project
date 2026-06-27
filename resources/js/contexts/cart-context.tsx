import { createContext, useContext, useState } from 'react';
import type { CartItem } from '@/types/cart';
import type { CartContextType } from '@/types/context';

export const CartContext = createContext<CartContextType>(
    {} as CartContextType,
);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [dataMenu, setDataMenu] = useState<CartItem[]>([]);
    const totalMenu = dataMenu.length;

    console.log(totalMenu)

    return (
        <CartContext.Provider value={{ dataMenu, setDataMenu, totalMenu }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart Must Use Inside Cart Provider');
    }

    return context;
};
