import { Minus, Plus } from 'lucide-react';
import CartImage from '@/assets/chicken-burger.jpg'

const CardCartMenu = () => {
    return (
        <div className="w-full h-auto text-dark">
            <div className='overflow-hidden rounded-2xl w-full h-30'>
                <img src={CartImage} className='w-full h-full object-center object-cover' alt="cart-img" />
            </div>
            <div>
                <div className='flex font-bold items-center justify-between '>
                    <h1 className='text-lg'>The Classic Burger</h1>
                    <h2 className='text-primary'>Rp 82k</h2>
                </div>
                <p className='text-sm'>Wagyu Muantap Pol ini rek, enak banget cok</p>
            </div>
            <div className='flex items-end gap-4'>
            <div className='inline-flex rounded-full mt-4 space-x-3 py-1 px-3 items-center border border-black/30'>
                <button><Minus className='w-4 h-4' /></button>
                <span>1</span>
                <button><Plus className='w-4 h-4' /></button>
            </div>
            <button className='text-slate-700 underline'>Remove</button>
            </div>
        </div>
    )
}

export default CardCartMenu;