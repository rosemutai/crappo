import Link from "next/link"
import Image from "next/image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faInstagram, faWhatsapp, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import bitcoin from '../public/images/bitcoin.png'
import visa from '../public/images/visa.png'
import mastercard from '../public/images/mastercard.png'

const Footer = () => {
  return (
    <div className="footer w-full  md:px-24 md:mt-11">
        <div className="first-row md:flex md:justify-between">
            <div className="first-col">
                <div className="title">
                    <h2 className="text-white font-semibold font-inter tracking-widest md:ml16 ">CRAPPO</h2>
                </div>
            </div>
            <div className="second-col  md:flex md:flex-col">
                <div className="title">
                    <h2 className="text-white font-semibold font-inter tracking-widest md:mb-3">Quick Links</h2>
                </div>

                <div className="links md:flex md:flex-col md:justify-between">
                    <Link href="/">
                        <a className='text-white font-light font-rubik md:mb-3'>Home</a>
                    </Link>

                     <Link href="/">
                        <a className='text-white font-light font-rubik md:mb-3'>Products</a>
                    </Link>

                     <Link href="/">
                        <a className='text-white font-light font-rubik md:mb-3'>About</a>
                    </Link>

                     <Link href="/">
                        <a className='text-white font-light font-rubik md:mb-3'>Features</a>
                    </Link>

                     <Link href="/">
                        <a className='text-white font-light font-rubik md:mb-3'>Contact</a>
                    </Link>
                </div>
            </div>
            <div className="third-col">
                <div className="title">
                    <h2 className="text-white font-semibold font-inter tracking-widest md:mb-3 ">Resource Links</h2>
                </div>

                <div className="links md:flex md:flex-col md:justify-between">
                    <Link href="/">
                        <a className='text-white font-light font-rubik md:mb-3'>Download Whitepapper</a>
                    </Link>

                     <Link href="/">
                        <a className='text-white font-light font-rubik md:mb-3'>Smart Token</a>
                    </Link>

                     <Link href="/">
                        <a className='text-white font-light font-rubik md:mb-3'>Blockchain Explore</a>
                    </Link>

                     <Link href="/">
                        <a className='text-white font-light font-rubik md:mb-3'>Crypto API</a>
                    </Link>

                     <Link href="/">
                        <a className='text-white font-light font-rubik md:mb-3'>Interest</a>
                    </Link>
                </div>
            </div>
            <div className="fourth-col md:flex md:flex-col">
                <div className="title">
                    <h2 className="text-white font-semibold font-inter tracking-widest md:mb-6 ">
                        We accept following payment systems
                    </h2>
                </div>

                <div className="payments-imgs md:flex md:justify-between">
                    <div className="visa">
                        <Image 
                            src={visa}
                            alt="visa"
                        />
                    </div>

                     <div className="mastercard">
                        <Image 
                            src={mastercard}
                            alt="mastercard"
                        />
                    </div>

                     <div className="bitcoin">
                        <Image 
                            src={bitcoin}
                            alt="bitcoin"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className="second-row md:flex md:justify-between md:mt-7">
            <div className="first-col md:flex md:justify-between ">
                <h5 className="text-white font-regular font-inter tracking-widest">
                    © 2022 CRAPPO. All rights reserved.
                </h5>
            </div>

             <div className="social-links md:flex">
                    <div className="youtube text-white text-xl md:mr-8">
                        <FontAwesomeIcon 
                            icon={faYoutube}
                        />
                    </div>

                    <div className="youtube text-white text-xl md:mr-8">
                        <FontAwesomeIcon 
                            icon={faWhatsapp}
                        />
                    </div>

                     <div className="youtube text-white text-xl md:mr-8">
                        <FontAwesomeIcon 
                            icon={faInstagram}
                        />
                    </div>

                    <div className="youtube text-white text-xl md:mr-8">
                        <FontAwesomeIcon 
                            icon={faTwitter}
                        />
                    </div>

                    <div className="youtube text-white text-xl md:mr-8">
                        <FontAwesomeIcon 
                            icon={faLinkedin}
                        />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Footer