import ButtonSvg from '../assets/svg/ButtonSvg'

const Button = ({children,className,href,onclick,white,px}) => {
 
    const classes = `button relative inline-flex justify-center items-center h-11 transition-color hover:text-color-1 ${px || 'px-7'} ${white ?'text-n-8':'terxt-n-1'}
    ${className  || ''} `
    const spanclass = 'relative z-10'
   const RenderBtn =()=>(
<>
    <button className={classes} onClick={onclick}>
       <span className={spanclass}>{children}</span>
       {ButtonSvg(white)}
    </button>
    </>
   )

   const RenderLink =()=>(
   <a href={href} className={classes}>
      <span className={spanclass}>{children}</span>
       {ButtonSvg(white)}
   </a>
   )
   return href ? RenderLink() :RenderBtn()
}

export default Button