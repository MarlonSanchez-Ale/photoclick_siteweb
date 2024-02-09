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
        <header className='flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50 sm:p-10 bg-pc_gray_details'>
            <div className='xl:w-1/6 text-center justify-center'>
                <img src={logo}></img>
            </div>
            <nav
                className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"
                    } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
            >
                <a href="#home" className="">
                    Home
                </a>
                <a href="#aboutUs" className="">
                    About Us
                </a>
                <a href="#services" className="">
                    Gallery
                </a>
                <button className="btn_primary">
                    Contact
                </button>
            </nav>
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="xl:hidden text-2xl p-2"
            >
                {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
            </button>
        </header >
    )
}

export default Header