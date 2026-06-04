interface HowToOrderType {
    number: string;
    title: string;
    subtitle: string;
}

const CardHowToOrder = ({ number, title, subtitle }: HowToOrderType) => {
    return (
        <div className="flex h-auto bg-none w-full flex-col items-center font-hanken">
            <div className="inline-flex bg-white z-10 h-20 w-20 items-center justify-center rounded-full border-4 border-primary text-3xl font-bold text-primary">
                <h3>{number}</h3>
            </div>
            <div className="mt-6 text-center bg-white z-9">
                <h1 className="text-2xl font-bold text-dark">{title}</h1>
                <h2 className="mx-auto mt-3 w-[80%] text-secondary">
                    {subtitle}
                </h2>
            </div>
        </div>
    );
};

export default CardHowToOrder;
