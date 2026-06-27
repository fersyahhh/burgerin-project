import { Head } from '@inertiajs/react';
import DiscontOngkir from '@/components/discont-ongkir';
import Footer from '@/layouts/footer';
import MenuHeader from '@/layouts/menu/menu-header';
import MenuListSection from '@/layouts/menu/menu-list';
import Navbar from '@/layouts/navbar';

const Menu = () => {
    return (
        <div>
            {/* Title Website */}
            <Head title="Burgerin | Menu Page" />

            <DiscontOngkir />

            {/* Container Main */}
            <div className="container">
                {/* Navbar */}
                <div className="fixed top-8 right-0 left-0 z-997 mx-auto max-w-[inherit] px-4 md:px-8">
                    <Navbar />
                </div>

                {/* Content */}
                <MenuHeader />
                <MenuListSection />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Menu;
