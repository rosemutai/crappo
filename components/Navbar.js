import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Transition } from '@headlessui/react'
import { useState } from 'react'


const Navbar = () => {
    const [isShowing, setIsShowing] = useState(false)
  return (
    <header className="navbar relative mx-0 md:mx-12 flex flex-col md:flex-row justify-between items-center md:h-24">
        <div className="logo flex justify-between items-center w-full px-4 md:px-0 py-2 md:py-0">
            <Link href="/">
                <a className='text-white font-semibold font-inter tracking-widest md:ml-16 '>CRAPPO</a>
            </Link>
              <div className='md:hidden flex'>
                  <button type='button' onClick={() => setIsShowing((isShowing) => !isShowing)}>
                    {isShowing ? (
                          <FontAwesomeIcon icon={faTimes} className='text-white text-2xl' />

                    ) : (
                          <FontAwesomeIcon icon = { faBars } className = 'text-white text-2xl' />

                    )}
                  </button>
                
            </div>
        </div>

        <div className="menu hidden md:block">
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

        <Transition
        show={isShowing}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
              <div className="menu">
                  <ul className='menu-links bg-grayish text-blueish md:hidden w-full min-h-screen absolute
                    top-8 left-0 mx-0 z-50 flex flex-col md:flex-row py-8 justify-between items-center '>
                      <li>
                          <Link href="/">
                              <a className='font-light font-rubik md:my-0 md:mr-8
                            hover:border-x-0 hover:border-t-0 hover:border-b-2 hover-border-b-white
                            hover:transition-all'>Products</a>
                          </Link>
                      </li>

                      <li>
                          <Link href="/">
                              <a className='font-light font-rubik md:mb-0 md:mr-8
                             hover:border-x-0 hover:border-t-0 hover:border-b-2 hover-border-b-white
                            hover:transition-all'>Features</a>
                          </Link>
                      </li>
                      <li>
                          <Link href="/">
                              <a className='font-light font-rubik md:mb-0 md:mr-8
                         hover:border-x-0 hover:border-t-0 hover:border-b-2 hover-border-b-white
                            hover:transition-all'>About</a>
                          </Link>
                      </li>
                      <li>
                          <Link href="/">
                              <a className='font-light font-rubik md:mr-8
                         hover:border-x-0 hover:border-t-0 hover:border-b-2 hover-border-b-white
                            hover:transition-all'>Contact</a>
                          </Link>
                      </li>
                      <li>
                          <Link href="/">
                              <a className='font-light font-rubik md:mb-0 md:md:mr-8 
                         hover:border-x-0 hover:border-t-0 hover:border-b-2 hover-border-b-white
                            hover:transition-all'>Login</a>
                          </Link>
                      </li>

                      <li>
                          <Link href="/">
                              <a className='text-white font-light font-rubik mb-2 md:mb-0 bg-lightblue py-2 px-4 rounded-3xl
                            hover:shadow-md hover:shadow-lightblue'>Register</a>
                          </Link>
                      </li>
                  </ul>
              </div>
      </Transition>
    </header>
  )
}

export default Navbar