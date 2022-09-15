import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="navbar mx-12 flex flex-col md:flex-row justify-between items-center h-64 md:h-24">
        <div className="logo">
            <h2 className="text-white font-semibold font-inter tracking-widest md:ml-16 ">CRAPPO</h2>
        </div>

        <div className="menu">
            <ul className='menu-links flex flex-col md:flex-row justify-between items-center '>
                <li>
                    <Link href="/">
                        <a className='text-white font-light font-rubik my-2 md:my-0 md:mr-8'>Products</a>
                    </Link>
                </li>

                 <li>
                    <Link href="/">
                        <a className='text-white font-light font-rubik mb-2 md:mb-0 md:mr-8'>Features</a>
                    </Link>
                </li>
                 <li>
                    <Link href="/">
                        <a className='text-white font-light font-rubik mb-2 md:mb-0 md:mr-8'>About</a>
                    </Link>
                </li>
                 <li>
                    <Link href="/">
                        <a className='text-white font-light font-rubik md:mr-8'>Contact</a>
                    </Link>
                </li>
                 <li>
                    <Link href="/">
                        <a className='text-white font-light font-rubik mb-2 md:mb-0 md:md:mr-8'>Login</a>
                    </Link>
                </li>

                 <li className='text-grayish font-light font-rubik mb-2 md:mb-0 md:mr-8'> | </li>

                 <li>
                    <Link href="/">
                        <a className='text-white font-light font-rubik mb-2 md:mb-0 bg-lightblue py-2 px-4 rounded-3xl'>Register</a>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar