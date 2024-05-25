import { useState, useEffect } from 'react';
import Logo from "../../assets/logo/logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed w-full z-50 ${isScrolled ? 'bg-white bg-opacity-70 backdrop-blur' : 'bg-transparent'}`}>
            <div className="px-4 lg:px-24">
                <div className="flex items-center justify-between">
                    <div>
                        <img className="w-24 lg:w-40" src={Logo} alt="Logo" />
                    </div>
                    <div className="flex lg:hidden">
                        <button className="mobile-menu-button" onClick={toggleMenu}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                    <nav className={`lg:flex justify-center items-center gap-6 text-lg font-semibold hidden`}>
                        <a href="#">Home</a>
                        <a href="#">Berita</a>
                        <a href="#">Data</a>
                        <a href="#">Edukasi</a>
                        <button className="bg-blue-500 px-4 py-2 rounded-lg text-white">
                            <a href="/kalkulator">Kalkulator</a>
                        </button>
                    </nav>
                </div>
                <div className={`mobile-menu ${isMenuOpen ? 'flex' : 'hidden'} lg:hidden pb-4`}>
                    <nav className="flex flex-col gap-4">
                        <a className='px-4' href="#">Home</a>
                        <a className='px-4' href="#">Berita</a>
                        <a className='px-4' href="#">Data</a>
                        <a className='px-4' href="#">Edukasi</a>
                        <button className="bg-blue-500 px-4 py-2 rounded-lg text-white">
                            <a href="/kalkulator">Kalkulator</a>
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
