import { X } from 'lucide-react';
import { useMenu } from '@/contexts/menu-context';
import NavLink from './navlink';

const CardNavlink = () => {
    const { closeMenu } = useMenu();

    return (
        <div className="min-h-screen bg-dark p-6">
            <header className="flex items-center justify-between border-b border-white/15 pb-3">
                <h1 className="font-hanken text-3xl font-bold">Burgerin</h1>
                <button onClick={closeMenu}>
                    <X />
                </button>
            </header>
            <NavLink />
        </div>
    );
};

export default CardNavlink;
