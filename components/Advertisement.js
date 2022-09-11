import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faRoadLock, faUser, faAngleRight} from "@fortawesome/free-solid-svg-icons";


import whyImg from '../public/images/why-img.png'
import bitcoin from '../public/images/bitcon.png'
import etherum from '../public/images/ethereum.png'
import litecoin from '../public/images/litecoin.png'
const Advertisement = () => {
  return (
    <div className=" md:flex md:flex-col">
        <div className="ad-section md:flex md:justify-around md:mt-11">
        <div className="digital md:flex md:justify-between">
                <FontAwesomeIcon
                    icon={faBarChart} 
                    className="text-blue-600 bg-gray-500 rounded-full p-5 text-2xl"
                />
                <div className="md:flex md:flex-col md:justify-center md:px-3">
                    <h5 className="font-bold text-white text-xl font-rubik">$30B</h5>
                    <p className="font-rubik font-extralight text-sm text-gray-400">Digital Currency Exchange</p>
                </div>
        </div>

        <div className="global md:flex md:justify-between">
                <FontAwesomeIcon
                    icon={faRoadLock} 
                    className="text-blue-600 bg-gray-500 rounded-tr-full rounded-tl-full rounded-br-full 
                        rounded-bl-full rounded-3xl p-5 text-xl"
                />
                <div className="lock md:flex md:flex-col md:justify-center md:px-3">
                    <h5 className="font-bold text-white text-xl font-rubik">190+</h5>
                    <p className="font-rubik font-extralight text-sm text-gray-400">Countries Around The World</p>
                </div>
        </div>

        <div className="user md:flex md:justify-between">
                <FontAwesomeIcon
                    icon={faUser} 
                    className="text-blue-600 bg-gray-500 rounded-full p-5 text-2xl"
                />

                <div className="lock md:flex md:flex-col md:justify-center md:px-3">
                    <h5 className="font-bold text-white text-xl font-rubik">$10M</h5>
                    <p className="font-rubik font-extralight text-sm text-gray-400">Trusted Wallet Investors</p>
                </div>
                
        </div>
            


        </div>
        <div className="image-description md:flex md:justify-between md:mt-16">
            <div className="image md:w-1/2 md:ml-11">
                <Image 
                    src={whyImg}
                    alt="why"
                />
            </div>
            <div className="description md:w-1/2 md:flex md:flex-col md:justify-center ">
                <h3 className='text-white font-semibold md:mt-5 text-5xl leading-tight  
                tracking-normal'>Why you should choose Chappo</h3>
                <p className='font-rubik font-extralight text-lg text-gray-400 tracking-tight md:my-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Vero, laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit. In, praesentium.
                </p>
                <button className="font-rubik bg-lightblue md:mt-3  rounded-3xl p-1 text-white w-32
                flex justify-center items-center">learn more </button>
            </div>
        </div>
        <div className='how-much-can-you-earn md:mt-11 md:relative'>
            <div className='md:flex md:flex-col md:justify-center md:items-center'>
                <h3 className='earn-title text-white font-xl font-semibold'>How Much Can You Earn With Us</h3>
                <p className='font-rubik font-extralight text-sm text-gray-400 tracking-tight md:my-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, 
                    id similique temporibus dignissimos tempore odio?
                </p>
            </div>

            <div className='md:flex md:flex-col md:w-8/12 md:h-72 md:mx-auto md:mt-8 rounded-md bg-white md:py-11 px-20'>
                <div className='calculations  md:flex md:justify-between'>
                    <div>
                        <input type="text" placeholder='Enter your hash rate' className='bg-white border 
                            border-t-white border-x-white border-b-gray-300 md:w-96 focus:outline-0 py-2 
                            placeholder:text-black placeholder:font-medium'>
                        </input>
                    </div>
                    <div className='dropdown '>
                        <select className='md:w-32 py-2 focus:outline-0 bg-gray-300 text-black font-semibold' name="cars" id="cars">
                            <option value="H/s">H/s</option>
                            <option value="TH/s">TH/s</option>
                            <option value="KH/s">KH/s</option>
                            <option value="MH/s">MH/s</option>
                            <option value="GH/s">GH/s</option>
                        </select>
                    </div>

                    <div className='btn'>
                        <button className="font-rubik bg-lightblue rounded-3xl px-1 py-2 text-white w-32
                    flex justify-center items-center">Calculate </button>
                    </div>
                </div>

                  <div className='estimated-revenue font-medium'>
                    <p className='text-blue-500 md:my-5'>ESTIMATED 24 HOUR REVENUE:</p>
                   <div className='md:flex'>
                        <h5 className='md:my-4 font-extrabold text-2xl tracking-wide'>0.055 130 59 ETH </h5>
                        <span className='md:my-4 font-extrabold text-xl md:ml-3 text-blue-500 tracking-wide'>($1275)</span>
                   </div>
                    <p className='font-rubik font-extralight text-sm text-gray-400 tracking-tight md:my-3'>Revenue will change based on mining difficulty and Ethereum price.</p>
                </div>

        </div>

        <div className='trade md:flex md:flex-col bg-gray-200 md:absolute md:w-full  md:z-20'>
            <div className='title'>
                <h2 className='text-black font-rubik text-center font-semibold text-xl md:my-8'>Trade Securely And Market The High Growth Cryptocurrencies.</h2>
            </div>

            <div className='cards md:w-10/12 md:mx-auto  md:mt-5 md:flex md:justify-between'>
                <div className='card md:w-80 md:flex md:flex-col md:justify-center md:items-center 
                bg-white py-4 md:h-96 active:bg-violet-900
                    shadow rounded-md md:mb-3'>
                    <div className='image'>
                        <Image
                            src={bitcoin}
                            alt="bitcoin logo"
                        />
                    
                    </div>
                    <div className='md:flex md:my-3'>
                            <h4 className='font-extrabold font-rubik text-2xl tracking-wide'>Bitcoin </h4>
                            <span className='text-gray-500 md:ml-2 text-xl tracking-wide md:-mt-1'>BTC</span>
                    </div>
                    <div><p className='font-rubik md:mx-auto md:w-3/4 text-center'>
                        Digital currency in which a record of transactions is maintained.</p>
                    </div>

                    <div className='next-btn'>
                        <FontAwesomeIcon 
                            icon={faAngleRight}
                            className="text-lightblue md:mt-6 border-2 border-gray-400 py-6 px-7 text-xl rounded-full"
                        />
                    </div>
                </div>

                <div className='card md:w-80 md:flex md:flex-col md:justify-center md:items-center bg-white py-4 md:h-96
                    shadow rounded-md md:mb-3'>
                    <div className='image'>
                        <Image
                            src={etherum}
                            alt="ethereum logo"
                        />
                    
                    </div>
                    <div className='md:flex md:my-3'>
                            <h4 className='font-extrabold font-rubik text-2xl tracking-wide'>Bitcoin </h4>
                            <span className='text-gray-500 md:ml-2 text-xl tracking-wide md:-mt-1'>BTC</span>
                    </div>
                    <div><p className='font-rubik md:mx-auto md:w-3/4 text-center'>
                        Blockchain technology to create and run decentralized digital applications.</p>
                    </div>

                    <div className='next-btn'>
                        <FontAwesomeIcon 
                            icon={faAngleRight}
                            className="text-lightblue md:mt-6 border-2 border-gray-400 py-6 px-7 text-xl rounded-full"
                        />
                    </div>
                </div>

                <div className='card md:w-80 md:flex md:flex-col md:justify-center md:items-center bg-white py-4 md:h-96
                    shadow rounded-md md:mb-3'>
                    <div className='image'>
                        <Image
                            src={litecoin}
                            alt="litecoin logo"
                        />
                    
                    </div>
                    <div className='md:flex md:my-3'>
                            <h4 className='font-extrabold font-rubik text-2xl tracking-wide'>Bitcoin </h4>
                            <span className='text-gray-500 md:ml-2 text-xl tracking-wide md:-mt-1'>BTC</span>
                    </div>
                    <div><p className='font-rubik md:mx-auto md:w-3/4 text-center'>
                        Cryptocurrency that enables instant payments to anyone in the world.</p>
                    </div>

                    <div className='next-btn'>
                        <FontAwesomeIcon 
                            icon={faAngleRight}
                            className="text-lightblue md:mt-6 border-2 border-gray-400 py-6 px-7 text-xl rounded-full"
                        />
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Advertisement

// apply this
// mediamaxdigital@mediamax.co.ke