import { smallSphere, stars } from "../assets"
import Heading from "./Heading"
import Section from "./Section"
import PricingList from "./PricingList"
import {LeftLine,RightLine} from './design/Pricing'

const Pricing = () => {
  return (
    <Section className='overflow-hidden' id={'pricing'}>
        <div className="container relative z-2">
            <div className="hidden relative mb-[6.5rem] justify-center lg:flex">
                <img src={smallSphere} width={255} height={255} alt="smallsphere" className="relative z-1" />
                <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <img src={stars} 
                 width={950} height={450} className="w-full h-full" alt="stars" />
            </div>
            </div>
            <Heading   tag="Get started with Brainwave"
          Title="Pay once, use forever" />
        </div>

       <div className="relative">
        <PricingList/>
       </div>
        <div className="flex items-center justify-center mt-10">
          <a href="/pricing" className="font-code tracking-wider font-xs fonr-bold uppercase border-b">  See the full details</a>
        </div>
    </Section>
  )
}

export default Pricing