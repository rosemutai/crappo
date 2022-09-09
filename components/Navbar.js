import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="navbar md:mx-8 md:flex md:justify-between md:items-center md:h-16">
        <div className="logo">
            <h2 className="text-white font-semibold font-inter tracking-widest">CRAPPO</h2>
        </div>

        <div className="menu">
            <ul className='menu-links md:flex md:justify-between '>
                <li>
                    <Link href="/">
                        <a className='text-white font-light font-rubik md:mr-8'>Products</a>
                    </Link>
                </li>

                 <li>
                    <Link href="/">
                        <a className='text-white font-light font-rubik md:mr-8'>Features</a>
                    </Link>
                </li>
                 <li>
                    <Link href="/">
                        <a className='text-white font-light font-rubik md:mr-8'>About</a>
                    </Link>
                </li>
                 <li>
                    <Link href="/">
                        <a className='text-white font-light font-rubik md:mr-8'>Contact</a>
                    </Link>
                </li>
                 <li>
                    <Link href="/">
                        <a className='text-white font-light font-rubik md:mr-8'>Login</a>
                    </Link>
                </li>

                 <li className='text-grayish font-light font-rubik md:mr-8'> | </li>

                 <li>
                    <Link href="/">
                        <a className='text-white font-light font-rubik bg-lightblue py-2 px-4 rounded-3xl'>Register</a>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar