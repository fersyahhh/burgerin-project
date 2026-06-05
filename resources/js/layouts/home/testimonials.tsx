import CardTestimonial from '@/components/card-testimonial';
import { testimonialConst } from '@/consts/testimonial-const';

const TestimonialSection = () => {
    return (
        <div className="mt-30 h-auto w-full font-hanken">
            <header className="w-[90%] text-left font-playfair text-3xl font-bold text-dark md:text-4xl lg:text-5xl">
                Apa Kata <span className="text-primary">Para Pecinta </span>
                <span className="bg-primary px-2 text-neutral italic">
                    Burgerin
                </span>{' '}
                ?
            </header>
            <div className="mt-6 hide-scrollbar flex w-full items-stretch gap-8 overflow-x-auto rounded-2xl px-4 pb-10 md:gap-12">
                {testimonialConst.map((item) => (
                    <div
                        className="flex h-auto w-75 shrink-0 snap-center rounded-2xl"
                        key={item.id}
                    >
                        <CardTestimonial
                            address={item.address}
                            name={item.name}
                            text={item.text}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialSection;
