

const Footer = () => {
    const year = new Date().getFullYear() || 2025

  return (
    <footer className='w-full h-16 bg-[#21201f] shadow-md flex items-center justify-center text-white text-sm font-semibold'>
      <p>{year} Proyecto creado por <span>@GuilleNec</span></p>
    </footer>  
    )
}

export default Footer