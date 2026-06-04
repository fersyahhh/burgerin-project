import type { ReactNode } from 'react';

interface WhyChooseType {
    icon: ReactNode;
    title: string;
    subtitle: string;
}

const CardWhyChoose = ({ icon, title, subtitle }: WhyChooseType) => {
    return (
        <div className="flex h-auto w-full flex-col items-center font-hanken">
            <div className="inline-flex h-18 w-18 items-center justify-center rounded-full bg-primary/20 font-bold text-primary">
                {icon}
            </div>
            <div className="mt-6 text-center">
                <h1 className="text-2xl font-bold text-dark">{title}</h1>
                <h2 className="mt-3 text-secondary mx-auto w-[80%]">{subtitle}</h2>
            </div>
        </div>
    );
};

export default CardWhyChoose;
