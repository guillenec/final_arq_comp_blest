import Loading from "../../components/Loading/Loading"

const Cart = () => {
  return (
  <main className='flex flex-col items-center justify-center h-full'>
    <h1 className='text-4xl font-bold text-[#b1182e]'>Cart</h1>
    <section className="w-full h-72 flex justify-center items-center">
      <Loading />
    </section>
  </main>  )
}

export default Cart