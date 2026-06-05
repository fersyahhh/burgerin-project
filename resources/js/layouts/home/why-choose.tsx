import { Award, Gauge, Utensils, Wallet } from 'lucide-react';
import CardWhyChoose from '@/components/card-why-choose';

const WhyChooseSection = () => {
    return (
        <div className="mt-20 h-auto w-full rounded-4xl bg-tertiary/10 px-4 py-15 font-hanken">
            <header className="text-center">
                <div className='md:inline-flex items-center justify-center gap-3'>
                    <h1 className="text-4xl font-bold text-dark">
                        Kenapa Harus{' '}
                    </h1>
                    <div className="relative mx-auto w-fit">
                        <span className="text-4xl font-bold text-primary">
                            Burgerin?
                        </span>
                        <div className="absolute -bottom-1 h-1 w-full -rotate-2 bg-linear-to-r from-dark to-primary"></div>
                    </div>
                </div>
                <h2 className="mt-5 text-secondary md:w-[80%] xl:w-[60%] mx-auto">
                    Kami tidak sekadar membuat burger, kami menciptakan
                    kebahagiaan di setiap gigitan. Kualitas premium adalah
                    komitmen utama kami.
                </h2>
            </header>

            <div className="mt-20 grid grid-cols-1 gap-15 md:grid-cols-2">
                <CardWhyChoose
                    icon={<Utensils strokeWidth={3} />}
                    title={'Bahan Segar Pilihan'}
                    subtitle={
                        'Sayuran segar dari petani lokal dan 100% daging sapi premium yang diantar baru setiap harinya.'
                    }
                />
                <CardWhyChoose
                    icon={<Gauge strokeWidth={3} />}
                    title={'Pengiriman Kilat'}
                    subtitle={
                        'Tim kurir kami siap menjamin burgermu tiba dalam keadaan hangat dan segar dalam waktu 30 menit!'
                    }
                />
                <CardWhyChoose
                    icon={<Award strokeWidth={3} />}
                    title={'Kualitas Premium'}
                    subtitle={
                        'Resep autentik racikan Master Chef dipadu dengan roti brioche artisanal untuk kelezatan hakiki.'
                    }
                />
                <CardWhyChoose
                    icon={<Wallet strokeWidth={3} size={28} />}
                    title={'Harga Bersahabat'}
                    subtitle={
                        'Nikmati kelezatan burger kualitas premium dengan harga yang tetap ramah di kantong kamu.'
                    }
                />
            </div>
        </div>
    );
};

export default WhyChooseSection;
