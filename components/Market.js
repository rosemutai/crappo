import Image from "next/image"

import feature1 from '../public/images/feature1.png'
import feature2 from '../public/images/feature2.png'
import feature3 from '../public/images/feature3.png'
const Market = () => {
  return (
    <div className="market-content mt-11 w-full md:flex md:flex-col">
        <div className='title mb-11'>
            <h2 className='text-white font-rubik text-center font-normal tracking-wide
               w-11/12 md:w-6/12 mx-auto text-2xl md:text-3xl md:my-8'>
                Market Sentiments, Portfolio, And Run The Infrastructure Of Your Choice</h2>
        </div>

      <div data-aos="flip-left" className="md:hidden w-8/12 mx-auto invest-smart flex flex-col  justify-between md:px-32 ">
        <div className="description">
          <h4 className='text-white font-rubik font-semibold text-xl mt-5 text-center'>Invest Smart</h4>
          <div className="image-section mt-3 md:mt-0 ">
            <Image
              src={feature1}
              alt=""
            />
          </div>
          <p className="text-gray-400 font-light font-rubik mx-auto  text-xs mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur rem ducimus vitae maiores dolorum alias.</p>
          <button className="font-rubik bg-lightblue mt-6 md:mt-3 mx-ao rounded-3xl p-1 text-white w-32
                f">Learn More </button>
        </div>

        
      </div>

      <div data-aos="flip-left" className="md:hidden w-8/12 mx-auto invest-smart flex flex-col  justify-between md:px-32 ">
        <div className="description">
          <h4 className='text-white font-rubik font-semibold text-xl mt-10 text-center'>Detailed Statistics</h4>
          <div className="image-section w-full mt-3 md:mt-0 ">
            <Image
              src={feature2}
              alt=""
            />
          </div>
          <p className="text-gray-400 font-light font-rubik mx-auto  text-xs mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur rem ducimus vitae maiores dolorum alias.</p>
          <button className="font-rubik bg-lightblue mt-6 md:mt-3 mx-ao rounded-3xl p-1 text-white w-32
                f">Learn More </button>
        </div>


      </div>

      <div data-aos="flip-left" className="md:hidden w-8/12 mx-auto invest-smart flex flex-col  justify-between md:px-32 ">
        <div className="description">
          <h4 className='text-white font-rubik font-semibold text-xl mt-10 text-center'>Grow Your Profit And Track Your Investments</h4>
          <div className="image-section mt-3 md:mt-0 ">
            <Image
              src={feature3}
              alt=""
            />
          </div>
          <p className="text-gray-400 font-light font-rubik mx-auto  text-xs mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur rem ducimus vitae maiores dolorum alias.</p>
          <button className="font-rubik bg-lightblue mt-6 md:mt-3 mx-ao rounded-3xl p-1 text-white w-32
                f">Learn More </button>
        </div>


      </div>

        <div data-aos="flip-left" className="hidden invest-smart md:flex md:justify-between md:px-32 ">
          <div className="description">
            <h4 className='text-white font-rubik font-semibold text-xl mt-5 md:my-5'>Invest Smart</h4>
            <p className="text-gray-400 font-light font-rubik md:w-11/12 text-xs md:mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Aspernatur rem ducimus vitae maiores dolorum alias.</p>
            <button className="font-rubik bg-lightblue mt-6 md:mt-3  rounded-3xl p-1 text-white w-32
                flex justify-center items-center">Learn More </button>
          </div>

          <div className="image-section mt-12 md:mt-0">
            <Image 
              src={feature1}
              alt=""
            />
          </div>
        </div>

        <div  data-aos="zoom-in" className="hidden detailed-statistics md:flex md:justify-between md:px-32 md:mt-24">
        <div className="image-section mt-12 md:mt-0">
            <Image 
              src={feature2}
              alt=""
            />
          </div>

        <div className="description md:ml-6">
            <h4 className='text-white font-rubik font-semibold text-xl mt-5 md:my-5'>Detailed Statistics</h4>
            <p className="text-gray-400 font-light font-rubik md:w-11/12 text-xs md:mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Libero deserunt commodi quos adipisci! Corporis, vero?</p>
            <button className="font-rubik bg-lightblue mt-3  rounded-3xl p-1 text-white w-32
                flex justify-center items-center">Learn More </button>
          </div>
        </div>

        <div data-aos="zoom-in-down" className="hidden Grow-your-profit md:flex md:justify-between md:px-32 md:mt-24">
          <div className="description">
            <h4 className='text-white font-rubik font-semibold text-xl mt-8 mb-3 md:my-5 md:w-11/12 tracking-wide'>
              Grow Your Profit And Track Your Investments</h4>
            <p className="text-gray-400 font-light font-rubik md:w-11/12 text-xs md:mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim odit distinctio dolore id incidunt?</p>
            <button className="font-rubik bg-lightblue mt-3  rounded-3xl p-1 text-white w-32
                flex justify-center items-center">Learn More </button>
          </div>

          <div className="image-section mt-3 md:mt-0 mx-auto md:mx-0">
            <Image 
              src={feature3}
              alt=""
            />
          </div>
        </div>

        <div data-aos="zoom-in-right" className="start-mining md:flex md:justify-between md:items-center 
          md:px-16 mt-24 bg-lightblue md:w-10/12
            bg-[url('../public/images/newsletterbox.png')] bg-contain md:mb-5 md:h-56 rounded-md md:mx-auto">
          <div className="description">
            <div className="title">
              <h4 className='text-white text-center md:text-start font-rubik font-medium text-2xl md:py-0 py-4 md:m-5 md:w-11/12 tracking-wide'>
              Start Mining Now</h4>
            </div>
            <div className="mining-description">
              <p className="text-white font-light font-rubik mx-auto md:mx-0 w-10/12 text-xs md:mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, ipsum. Lorem, ipsum dolor sit 
              amet consectetur adipisicing elit. Ad, saepe.</p>
            </div>
            
          </div>

          <div className="form-section mt-10 flex justify-between pb-8 md:pb-0 ml-8">
            <div>
              <input type="text" placeholder='enter message' className='bg-lightblue 
                 border-t-lightblue  border-x-lightblue border  border-b-white md:w-96 focus:outline-0 py-2 
                  placeholder:text-white placeholder:font-normal placeholder:text-sm'>
              </input>
            </div>
            <div className="btn">
              <button className="font-rubik bg-white md:mt-3  rounded-xl px-1 py-2 text-black w-24
                flex justify-center items-center  md:ml-3 md:mr-0 mr-8 text-sm">Subscribe </button>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Market