import { brainwaveSymbol, check } from "../assets"
import { collabApps, collabContent, collabText } from "../constants"
import Button from "./Button"
import Section from "./Section"
import {LeftCurve , RightCurve} from './design/Collaboration'


const Collaboration = () => {
  return (
   <Section crosses>
    <div className="container lg:flex">
        <div className="max-w-[25rem]">
            <h2 className="h2">
            AI Chat App for seamless collaboration
            </h2>

            <ul className="max-w-[22rem] mb-10 md:mb-14">
                {collabContent.map((item)=>(
                    <li className="mb-3 py-3" key={item.id}>
                        <div className="flex items-center">
                            <img src={check} alt="check" width={24} height={24} />
                            <h6 className=" body-2 ml-5">{item.title}</h6>
                        </div>
                        {item.text && <p className="body-2 mt-4 text-n-4">{item.text}</p>}
                    </li>
                ))}
            </ul>
            <Button className={`lg:mt-12 lg:ml-8`}>Try Now</Button>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
      <p className="body-2 text-n-4 mb-8 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
       {collabText}
      </p>
      <div className="relative left-1/2 border flex w-[22rem] border-n-6 aspect-square -translate-x-1/2 scale-75 md:scale-100 rounded-full">
        <div className="  border flex w-60 border-n-6 aspect-square m-auto rounded-full">
            <div className=" w-[6rem] rounded-full aspect-square m-auto p-[0.3rem] bg-conic-gradient">
                <div className="flex justify-center items-center h-full w-full bg-n-8 rounded-full">
                    <img src={brainwaveSymbol} width={48} height={48} alt="" />
                </div>
            </div>
        </div>
        <ul>
            {collabApps.map((item,index)=>(
            <li className={` absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}>
                <div className={`relative -top-[1.6rem] flex  h-[3.2rem] w-[3.2rem] rounded-full 
                 rotate-${index * 45}`}>
                    <img className="m-auto" src={item.icon} alt={item.title} height={item.height} width={item.width} />
                </div>
            </li>
            ))}
        </ul>
        <LeftCurve/>
        <RightCurve/>
      </div>
      
        </div>
       
    </div>
     </Section>
  )
}

export default Collaboration