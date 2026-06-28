import type { CartItem } from './cart';

export type MenuContextType = {
    isOpen: boolean;
    toggleMenu: () => void;
    openMenu: () => void;
    closeMenu: () => void;
};

export type CartContextType = {
    dataMenu: CartItem[];
    setDataMenu: React.Dispatch<React.SetStateAction<CartItem[]>>;
    totalMenu: number;
    isCart: boolean;
    closeCart: () => void;
    openCart: () => void;
};
