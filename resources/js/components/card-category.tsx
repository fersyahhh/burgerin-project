import type { ReactNode } from 'react';

interface CardCategoryProps {
    id: number | undefined;
    name: ReactNode;
    isActive: number | null;
    onClick: () => void;
}

const CardCategory = ({ id, name, onClick, isActive }: CardCategoryProps) => {
    return (
        <button
            onClick={onClick}
            className={`${isActive === id ? 'bg-primary' : 'bg-dark'} z-99 flex aspect-square h-13 w-40 shrink-0 items-center justify-center rounded-full text-center font-bold text-neutral shadow-lg shadow-black/20 transition-all duration-500 ease-in-out hover:-translate-y-1`}
        >
            <h1>{name}</h1>
        </button>
    );
};

export default CardCategory;
