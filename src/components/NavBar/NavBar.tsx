import { useState, useEffect } from 'react';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';
import { HiOutlineMenu } from 'react-icons/hi';
function NavBar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(
        (localStorage.getItem('theme') ? localStorage.getItem('theme') === 'true' : false) ||
            window.matchMedia('(prefers-color-scheme: dark)').matches,
    );

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('theme', JSON.stringify(!isDarkMode));
    };
    return (
        <nav className="flex items-center justify-between">
            <div className="lg::min-w-[200px] flex items-center md:min-w-[150px] md:justify-between lg:min-w-[270px]">
                <div className="mr-2 text-20 font-bold">NerdCard</div>
                {isDarkMode ? (
                    <BsSunFill
                        onClick={toggleDarkMode}
                        size={'24px'}
                        color="#e9c46a"
                        className="cursor-pointer md:size-8"
                    />
                ) : (
                    <FaMoon
                        onClick={toggleDarkMode}
                        size={'24px'}
                        color="#e9c46a"
                        className="cursor-pointer md:size-8"
                    />
                )}
            </div>

            <div className="relative text-16 font-semibold">
                <HiOutlineMenu
                    size={'24px'}
                    className="cursor-pointer md:hidden"
                    onClick={() => setIsOpen((pre) => (pre ? false : true))}
                />
                {isOpen && (
                    <ul className="absolute right-[25px] top-[32px] z-10 min-w-[150px] rounded-lg bg-purple-500">
                        <li className="rounded-t-lg border-b-[1px] border-white p-2 text-center text-13 active:bg-slate-500">
                            Features
                        </li>
                        <li className="border-b-[1px] border-white p-2 text-center text-13 active:bg-slate-500">
                            Menu
                        </li>
                        <li className="border-b-[1px] border-white p-2 text-center text-13 active:bg-slate-500">Our</li>
                        <li className="border-b-[1px] border-white p-2 text-center text-13 active:bg-slate-500">
                            Story
                        </li>
                        <li className="rounded-b-lg p-2 text-center text-13 active:bg-slate-500">Contact</li>
                    </ul>
                )}

                <div className="hidden items-center justify-between md:flex md:min-w-[400px] lg:min-w-[450px]">
                    <div className="flex space-x-8">
                        <span className="btn-hover">Features</span>
                        <span className="btn-hover">Menu</span>
                        <span className="btn-hover">Our Story</span>
                    </div>

                    <span className="btn-hover">Contact</span>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
