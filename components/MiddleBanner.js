import Image from "next/image"
import hero from '../public/images/hero-img.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay} from "@fortawesome/free-solid-svg-icons";

const MiddleBanner = () => {
  return (
    <div className="middle-banner md:w-10/12  md:mx-auto  md:flex md:justify-between md:items-center md:mt-2">
        <div className="left-side md:mt-16">
            <div className="discount-button bg-gray-600 rounded-3xl p-2 flex justify-between items-center
                w-72 md:w-96 text-sm font-light md:mt-0 mt-12">
                <p className="smallbutton font-rubik bg-white text-gray-400 rounded-3xl px-2
                    text-center text-sm py-2 md:py-0">70% SAVE</p>
                <p className="font-rubik text-white">for the best black friday deals</p>
                
            </div>
            <h2 className="ad text-white font-extrabold mt-12 md:mt-5 text-4xl leading-tight  md:w-96
                tracking-normal"> Fastest & Secure Platform To Invest In Crypto </h2>
            <p className="font-rubik font-extralight text-sm text-gray-400 tracking-wide md:tracking-tight pr-8 md:pr-0 my-6 md:my-3">
                buy and sell cyptocurrencies by trusted 10M wallets,in over 100m transactions</p>

            <button className="font-rubik bg-lightblue md:mt-3  rounded-3xl p-1 text-white w-48
                flex justify-center items-center">
                Try For Free
                <FontAwesomeIcon
                    icon={faPlay}
                    className="textxs bg-white text-lightblue w-1.5 h-1.5 px-3 py-2 rounded-3xl ml-3"
                />
            </button>
        </div>
       
        <div className="right-side md:-mt-5 md:w-1/2 ">
            <Image
                src={hero}
                alt="crypto"
            />
            
        </div>
    </div>
  )
}

export default MiddleBanner