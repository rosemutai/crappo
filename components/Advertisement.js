import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faRoadLock, faUser} from "@fortawesome/free-solid-svg-icons";

const Advertisement = () => {
  return (
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
  )
}

export default Advertisement