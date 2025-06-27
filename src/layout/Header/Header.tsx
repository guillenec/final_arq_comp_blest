import { useNavigate } from "react-router"


const Header = () => {
  const navigate = useNavigate()
  
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate('/')
  }
  return (
  <header className='w-full flex justify-between px-10 items-center p-4 bg-white shadow-md'>
    <button onClick={handleToggle} className='text-2xl font-bold text-blackCustom1 rounded-md p-2 shadow-md shadow-red-300 cursor-pointer hover:text-amber-50 hover:bg-red-400 ease-in duration-150'>BlestApp Shop</button>
    <button className='text-blackCustom1'>Menu</button>
  </header>  
  )
}

export default Header