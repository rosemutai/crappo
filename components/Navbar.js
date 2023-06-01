import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <header className="navbar mx-12 flex flex-col md:flex-row justify-between items-center h-64 md:h-24">
        <div className="logo flex justify-between items-center">
            <Link href="/">
                <a className='text-white font-semibold font-inter tracking-widest md:ml-16 '>CRAPPO</a>
            </Link>
              <div className='md:hidden flex'>
                <FontAwesomeIcon icon={faBars} className='text-white text-2xl' />
            </div>
        </div>

        <div className="menu">
            <ul className='menu-links flex flex-col md:flex-row justify-between items-center '>
                <li>
                    <Link href="/">
                        <a className='text-white font-light font-rubik my-2 md:my-0 md:mr-8
                            hover:border-x-0 hover:border-t-0 hover:border-b-2 hover-border-b-white
                            hover:transition-all pb-1'>Products</a>
                    </Link>
                </li>

                 <li>
                    <Link href="/">
                        <a className='text-white font-light font-rubik mb-2 md:mb-0 md:mr-8
                             hover:border-x-0 hover:border-t-0 hover:border-b-2 hover-border-b-white
                            hover:transition-all pb-1'>Features</a>
                    </Link>
                </li>
                 <li>
                    <Link href="/">
                        <a className='text-white font-light font-rubik mb-2 md:mb-0 md:mr-8
                         hover:border-x-0 hover:border-t-0 hover:border-b-2 hover-border-b-white
                            hover:transition-all pb-1'>About</a>
                    </Link>
                </li>
                 <li>
                    <Link href="/">
                        <a className='text-white font-light font-rubik md:mr-8
                         hover:border-x-0 hover:border-t-0 hover:border-b-2 hover-border-b-white
                            hover:transition-all pb-1'>Contact</a>
                    </Link>
                </li>
                 <li>
                    <Link href="/">
                        <a className='text-white font-light font-rubik mb-2 md:mb-0 md:md:mr-8 
                         hover:border-x-0 hover:border-t-0 hover:border-b-2 hover-border-b-white
                            hover:transition-all pb-1'>Login</a>
                    </Link>
                </li>

                 <li className='text-grayish font-light font-rubik mb-2 md:mb-0 md:mr-8'> | </li>

                 <li>
                    <Link href="/">
                        <a className='text-white font-light font-rubik mb-2 md:mb-0 bg-lightblue py-2 px-4 rounded-3xl
                            hover:shadow-md hover:shadow-lightblue'>Register</a>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar