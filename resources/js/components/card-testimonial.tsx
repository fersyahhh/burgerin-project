import { Star, User } from 'lucide-react';
import type { TestimonialType } from '@/types/testimonial';

const CardTestimonial = ({ name, text, address }: TestimonialType) => {
    return (
        <div className="mt-8 flex h-full w-full flex-col justify-between rounded-2xl p-6 text-secondary shadow-lg shadow-black/20">
            <div>
            <div className="flex items-center gap-2 text-primary">
                {Array.from({ length: 5 }).map((_, index) => (
                    <Star strokeWidth={3} size={20} key={index} />
                ))}
            </div>
                <p className="mt-4 italic">"{text}"</p>
            </div>
            <div>
                <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center rounded-full bg-primary/20 p-3 text-primary">
                        <User />
                    </div>
                    <div>
                        <h1 className="font-bold">{name}</h1>
                        <h2 className="text-sm">{address}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardTestimonial;
