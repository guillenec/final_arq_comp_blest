import { useNavigate } from "react-router"


const Header = () => {
  const navigate = useNavigate()
  
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate('/')
  }
  return (
  <header className='w-full flex justify-between px-10 items-center p-4 bg-white shadow-md'>
    <button onClick={handleToggle} className='text-2xl font-bold text-white rounded-sm p-2 shadow-md cursor-pointer bg-red-400 ease-in duration-150'>BlestApp Shop</button>

    <section className="flex items-center gap-4">
      <button onClick={() => navigate('/')} className='text-lg font-semibold text-blackCustom1 rounded-sm bg-white shadow-[10px_10px_20px_#c7c7c7,_-10px_-10px_20px_#ffffff] p-2 cursor-pointer hover:text-amber-50     hover:shadow-[0_0_20px_#ef4444] hover:bg-red-400 ease-in duration-150'>Home</button>
      <button onClick={() => navigate('/products')} className='text-lg font-semibold text-blackCustom1 rounded-sm bg-white shadow-[10px_10px_20px_#c7c7c7,_-10px_-10px_20px_#ffffff] p-2 cursor-pointer hover:text-amber-50 hover:shadow-[0_0_20px_#ef4444] hover:bg-red-400 ease-in duration-150'>Products</button>
      <button onClick={() => navigate('/cart')} className='text-lg font-semibold text-blackCustom1 rounded-sm bg-white shadow-[10px_10px_20px_#c7c7c7,_-10px_-10px_20px_#ffffff] p-2 cursor-pointer hover:text-amber-50 hover:shadow-[0_0_20px_#ef4444] hover:bg-red-400 ease-in duration-150'>Cart</button>
      <button onClick={() => navigate('/about')} className='text-lg font-semibold text-blackCustom1 rounded-sm bg-white shadow-[10px_10px_20px_#c7c7c7,_-10px_-10px_20px_#ffffff] p-2 cursor-pointer hover:text-amber-50 hover:shadow-[0_0_20px_#ef4444] hover:bg-red-400 ease-in duration-150'>About</button>  
    </section>
  </header>  
  )
}

export default Header