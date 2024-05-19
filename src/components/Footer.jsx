import { socials } from "../constants"
import Section from "./Section"


const Footer = () => {
  return (
    <Section   crosses className={'!px-0 !py-0'}>
        <div className="container flex font-sm sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
            <p className="caption text-n-4 lg:block"> © {new Date().getFullYear()} . All rights reserved.</p>

            <ul className="flex flex-wrap gap-5 ">
    {socials.map((iterm)=>(
        <a key={iterm.id}
        href={iterm.url}
        target="_blank"
        className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
        >
            <img src={iterm.iconUrl} height={16} width={16} alt={iterm.title} />
        </a>
    ))}
            </ul>
        </div>
    </Section>
  )
}

export default Footer