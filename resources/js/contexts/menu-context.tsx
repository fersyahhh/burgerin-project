import { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';
import type { MenuContextType } from '@/types/context';

export const MenuContext = createContext<MenuContextType>(
    {} as MenuContextType,
);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);
    const openMenu = () => setIsOpen(true);

    return (
        <MenuContext.Provider
            value={{ isOpen, toggleMenu, closeMenu, openMenu }}
        >
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => {
    const context = useContext(MenuContext);

    if (!context) {
        throw new Error('useMenu Must Use Inside Menu Provider');
    }

    return context;
};
