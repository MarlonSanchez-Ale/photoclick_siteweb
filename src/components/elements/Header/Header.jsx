import { useState } from 'react'
import logo from '../../../assets/icon_photoclick.svg'
// Icons
import {
    RiMenu3Fill,
    RiCloseLine,
} from "react-icons/ri";

function Header() {

    const [showMenu, setShowMenu] = useState()

    return (
        <header className="flex items-center justify-between sticky top-0 xl:justify-start w-full h-[10vh] z-50 p-10 bg-black">
            <div className="xl:w-1/6 text-center">
                <img src={logo} />
            </div>
            <nav
                className={`fixed bg-black text-pc_gray_white w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"
                    } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
            >
                <a href="#home" className="">
                    Home
                </a>
                <a href="#about" className="">
                    About Us
                </a>
                <a href="#services" className="">
                    Service
                </a>
                <a href="#gallery" className="">
                    Gallery
                </a>
                <a href="#contact" className='btn_nav'>
                    Contact
                </a>
            </nav>
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="xl:hidden text-2xl p-2 bg-pc_gray_details rounded-md text-white"
            >
                {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
            </button>
        </header>
    )
}

export default Header