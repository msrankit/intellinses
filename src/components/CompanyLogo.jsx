import { companyLogos } from "../constants"


const CompanyLogo = ({className}) => {
  return (
    <div className={`${className}`}>
        
        <h5 className="tagline mb-6 text-n-1/50 text-center">Helping people create beautiful content at</h5>

        <ul className="flex">
            {companyLogos.map((item,index)=>(
                <li key={index} className="flex items-center justify-between flex-1 h-[8.5rem]">
                    <img src={item} width={162} height={28} alt="" />
                </li>
            ))}
        </ul>
        </div>
  )
}

export default CompanyLogo