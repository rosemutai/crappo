import Image from "next/image"

import feature1 from '../public/images/feature1.png'
import feature2 from '../public/images/feature2.png'
import feature3 from '../public/images/feature3.png'
const Market = () => {
  return (
    <div className="market-content md:mt-11 w-full md:flex md:flex-col">
        <div className='title md:mb-11'>
            <h2 className='text-white font-rubik text-center font-normal tracking-wide
               md:w-6/12 md:mx-auto text-3xl md:my-8'>
                Market Sentiments, Portfolio, And Run The Infrastructure Of Your Choice</h2>
        </div>

        <div data-aos="flip-left" className="invest-smart md:flex md:justify-between md:px-32 ">
          <div className="description">
            <h4 className='text-white font-rubik font-semibold text-xl md:my-5'>Invest Smart</h4>
            <p className="text-gray-400 font-light font-rubik md:w-11/12 text-xs md:mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Aspernatur rem ducimus vitae maiores dolorum alias.</p>
            <button className="font-rubik bg-lightblue md:mt-3  rounded-3xl p-1 text-white w-32
                flex justify-center items-center">learn more </button>
          </div>

          <div className="image-section">
            <Image 
              src={feature1}
              alt=""
            />
          </div>
        </div>

        <div  data-aos="zoom-in" className="detailed-statistics md:flex md:justify-between md:px-32 md:mt-24">
          <div className="image-section">
            <Image 
              src={feature2}
              alt=""
            />
          </div>

          <div className="description md:ml-6">
            <h4 className='text-white font-rubik font-semibold text-xl md:my-5'>Detailed Statistics</h4>
            <p className="text-gray-400 font-light font-rubik md:w-11/12 text-xs md:mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Libero deserunt commodi quos adipisci! Corporis, vero?</p>
            <button className="font-rubik bg-lightblue md:mt-3  rounded-3xl p-1 text-white w-32
                flex justify-center items-center">learn more </button>
          </div>
        </div>

        <div data-aos="zoom-in-down" className="Grow-your-profit md:flex md:justify-between md:px-32 md:mt-24">
          <div className="description">
            <h4 className='text-white font-rubik font-semibold text-xl md:my-5 md:w-11/12 tracking-wide'>
              Grow Your Profit And Track Your Investments</h4>
            <p className="text-gray-400 font-light font-rubik md:w-11/12 text-xs md:mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim odit distinctio dolore id incidunt?</p>
            <button className="font-rubik bg-lightblue md:mt-3  rounded-3xl p-1 text-white w-32
                flex justify-center items-center">learn more </button>
          </div>

          <div className="image-section">
            <Image 
              src={feature3}
              alt=""
            />
          </div>
        </div>

        <div data-aos="zoom-in-right" className="start-mining md:flex md:justify-between md:items-center md:px-16 md:mt-24 bg-lightblue md:w-10/12
            bg-[url('../public/images/newsletterbox.png')] bg-contain md:mb-5 md:h-56 rounded-md md:mx-auto">
          <div className="description">
            <div className="title">
              <h4 className='text-white font-rubik font-medium text-2xl md:m-5 md:w-11/12 tracking-wide'>
              Start Mining Now</h4>
            </div>
            <div className="mining-description">
              <p className="text-white font-light font-rubik md:w-10/12 text-xs md:mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, ipsum. Lorem, ipsum dolor sit 
              amet consectetur adipisicing elit. Ad, saepe.</p>
            </div>
            
          </div>

          <div className="form-section md:mt-10 md:flex md:justify-between md:ml-8">
            <div>
              <input type="text" placeholder='enter message' className='bg-lightblue 
                 border-t-lightblue  border-x-lightblue border  border-b-white md:w-96 focus:outline-0 py-2 
                  placeholder:text-white placeholder:font-normal'>
              </input>
            </div>
            <div className="btn">
              <button className="font-rubik bg-white md:mt-3  rounded-xl px-1 py-2 text-black w-24
                flex justify-center items-center  md:ml-3">Subscribe </button>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Market