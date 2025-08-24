import { useNavigate } from "react-router"


const Header = () => {
  const navigate = useNavigate()
  
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate('/')
  }
  return (
  <header className='w-full flex justify-between px-10 items-center p-4 bg-white shadow-md'>
    <section onClick={handleToggle} className='p-2 cursor-pointer '>
      <img src="/src/images/Logo-Blest1.svg" alt="logo blest" />
    </section>

    <section className="flex items-center gap-4">
      <button onClick={() => navigate('/')} className='button_gen_nav text-md font-semibold text-blackCustom1 py-2 px-4 cursor-pointer ease-in duration-150'>Home</button>
      <button onClick={() => navigate('/products')} className='button_gen_nav text-md font-semibold text-blackCustom1 rounded-sm py-2 px-4 cursor-pointer ease-in duration-150'>Nosotros</button>
      <button onClick={() => navigate('/products')} className='button_gen_nav text-md font-semibold text-blackCustom1 rounded-sm py-2 px-4 cursor-pointer ease-in duration-150'>Lista</button>
      <button onClick={() => navigate('/about')} className='button_gen_nav text-md font-semibold text-blackCustom1 rounded-sm py-2 px-4 cursor-pointer ease-in duration-150'>About</button>  
      <button onClick={() => navigate('/cart')} className='button_gen_nav flex flex-nowrap gap-1 text-md font-semibold text-blackCustom1 py-2 px-4 cursor-pointer ease-in duration-150'> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        Cart</button>
      <button onClick={() => navigate('/cart')} className='button_gen_nav flex flex-nowrap gap-1 text-md font-semibold text-blackCustom1 py-2 px-4 cursor-pointer ease-in duration-150'> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
        User
      </button>
    </section>
  </header>  
  
  )
}

export default Header