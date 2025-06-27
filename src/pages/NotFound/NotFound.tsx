import { useNavigate } from "react-router"


const NotFound = () => {
  const navigate = useNavigate()

  const handleNavigate = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate('/')
  }
  return (
    <div className='w-full h-full flex flex-col items-center justify-center  bg-green-200'>
      <h1 className="text-3xl font-bold ">Not Found</h1>
      <button className='text-black-500 capitalize text-2xl text-white rounded-sm shadow-md bg-red-600 p-2 hover:bg-amber-50 hover:text-red-700 ease-in duration-100' onClick={handleNavigate}>Go Home</button>
    </div>
  )
}

export default NotFound