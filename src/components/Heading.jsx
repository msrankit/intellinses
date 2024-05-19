
import Tagline from "./Tagline"
const Heading = ({className , Title ,text,tag}) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`  }>
      {tag && <Tagline className='mb-4 md:justify-center'>{tag}</Tagline>}
        {Title && <h2 className="h2">{Title}</h2>}
        {text && <p className="body-2 mt-4 "> {text}</p>}
    </div>
  )
}

export default Heading