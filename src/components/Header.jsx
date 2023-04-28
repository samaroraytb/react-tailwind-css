import {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

function Header(params) {
    const [mobileMenu, toggleMenu] = useState(false)

    return(
        <div className="bg-[#2699fb] p-4">
            <div className="max-w-[1200px]  mx-auto py-[5px] flex justify-between items-center">
                <div className="text-2xl font-bold">
                    Coding Key
                </div>
                
                {mobileMenu ? (
                    <button onClick={() => toggleMenu(prevState => !prevState)}>
                        <AiOutlineClose className="block md:hidden text-white text-2xl"/>
                    </button>
                ) : (
                    <button onClick={() => toggleMenu(prevState => !prevState)}>
                        <AiOutlineMenu className="block md:hidden text-white text-2xl"/>
                    </button>
                )}
                
                <ul className="hidden md:flex text-white gap-10">
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
                {/* Responsive Menu */}
                <ul className={`duration-300 block md:hidden text-white bg-black fixed top-[70px] w-full h-screen
                    ${mobileMenu ? 'left-[0px]' : 'left-[-100%]'}`
                }>
                    <li className="p-3 text-2xl font-bold">
                        Home
                    </li>
                    <li className="p-3 text-2xl font-bold">
                        About
                    </li>
                    <li className="p-3 text-2xl font-bold">
                        Contact
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default Header