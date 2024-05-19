
import { check, service1, service2, service3 } from '../assets'
import { brainwaveServices, brainwaveServicesIcons } from '../constants'
import Heading from './Heading'
import Section from './Section'
import Generating from './Generating'
import {PhotoChatMessage,
  VideoBar,
  Gradient,
  VideoChatMessage} from './design/Services'

const Services = () => {
  return (
    <Section crosses id='how-to-use'>
      <div className='container'>
   <Heading Title={'Generative AI made for Creators '} text='Brainwave unlocks the potential of AI-powered applications' />

   <div className='relative'>   
    <div className='relative flex items-center z-1 h-[39rem] mb-5 p-8 border border-n-1/10

    rounded-3xl overflow-hidden lg:p-20 xl:h-[56rem] '>
      <div className='absolute top-0 left-0 h-full w-full pointer-events-none md:w-3/5 xl:w-auto'>
        <img src={service1} className='w-full h-full object-cover md:object-right' width={800} height={730} alt="Service1" />
      </div>
      <div className='relative z-1 max-w-[17rem] ml-auto'>
      <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Brainwave unlocks the potential of AI-powered applications
              </p>
              <ul className='body-2'>
                {brainwaveServices.map((item,index)=>(
                  <li key={index} className='flex items-start py-4  border-t border-n-6'>
                   <img src={check} 
                   width={24} height={24}
                alt="checkbox" />
                <p className='ml-4'> {item}</p>
                  </li>
                ))}
              </ul>
             
      </div>
      <Generating className='  absolute left-4 right-4 bottom-0  lg:left-1/2 border-n-1/10 border lg-right-auto lg:bottom-8  lg:-translate-x-1/2' />
    </div>
     <div className='relative grid lg:grid-cols-2 z-1 gap-5'>
    <div className='relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden '>
   <div className='absolute inset-0'>
    <img src=
    {service2} alt="Services2"
    width={630}
    height={750}
    className='w-full h-full object-cover'
    />
   </div>

   <div className='absolute flex flex-col inset-0 justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-9/0'>
   <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
   </div>
   < PhotoChatMessage/>
    </div>
    <div className='p-4 bg-n-7 lg:min-h-[46rem] rounded-3xl overflow-hidden'>
   <div className='py-12 px-4 xl:px-8'>
   <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  The world’s most powerful AI photo and video art generation
                  engine. What will you create?
                </p>

                <ul className='flex justify-between items-center'>
                  {brainwaveServicesIcons.map((item,index)=>(
                   <li key={index}
                   className={`flex items-center rounded-2xl justify-center ${index === 2 ? 'bg-conic-gradient w-[3rem] h-[3rem] p-0.25 md:w-[4.5rem] md:h-[4.5rem]':' flex w-10 h-10 bg-n-6 md:w-15 md:h-15'}`}>
                    <div className={`${index ===2 ? 'flex items-center justify-center bg-n-6 w-full h-full rounded-[1rem]':""}`}>
                      <img src={item} alt="item" width={24} height={24} />
                    </div>
                   </li>

                  ))}
                </ul>
   </div>
   <div className='relative h-[20rem] bg-n-8 rounded-xl overflow-hidden mg:h-[25rem]'>
  <img src={service3} height={400} width={520} alt="service3" className='w-full h-full object-cover' />
  <VideoChatMessage/>
  <VideoBar/>
   </div>
 
    </div>
     </div>
     <Gradient/>
   </div>
      </div>
    </Section>
  )
}

export default Services