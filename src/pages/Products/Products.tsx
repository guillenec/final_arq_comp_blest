import CardBasic from "../../components/CardBasic/CardBasic"

const Products = () => {
  const product1 = { 
    name:"Long Chair", 
    price:24000, 
    id:"23432252",
    images: {
      image1: "https://res.cloudinary.com/dpiwmbsog/image/upload/v1751235999/blest-shop/buzo_c_capucha/wxdk6hrnzhxu2g9dj5xh.png",
      image2: "https://res.cloudinary.com/dpiwmbsog/image/upload/v1751235999/blest-shop/buzo_c_capucha/wxdk6hrnzhxu2g9dj5xh.png",
      image3: "https://res.cloudinary.com/dpiwmbsog/image/upload/v1751235999/blest-shop/buzo_c_capucha/wxdk6hrnzhxu2g9dj5xh.png"
    },
    description: "A comfortable long chair for relaxation.",
    tipo: "Furniture",
    talle: { s: 1, m: 2, l: 3, xl: 4 },
    onAddToCart: () => console.log("Added to cart")
  }
  return (
  <main className='flex flex-col items-center justify-center h-full'>
    <h1 className='text-4xl font-bold text-[#b1182e]'>Products</h1>    
    <CardBasic {...product1}/>

  </main>  )
}

export default Products