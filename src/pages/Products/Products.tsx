import CardBasic from "../../components/CardBasic/CardBasic"

const Products = () => {
  const cart1 = { 
    name:"Long Chair", 
    price:2400, 
    id:"23432252",
    images: {
      image1: "https://example.com/image-small.jpg",
      image2: "https://example.com/image-medium.jpg",
      image3: "https://example.com/image-large.jpg"
    },
    description: "A comfortable long chair for relaxation.",
    tipo: "Furniture",
    talle: { s: 1, m: 2, l: 3, xl: 4 },
    onAddToCart: () => console.log("Added to cart")
  }
  return (
  <main className='flex flex-col items-center justify-center h-full'>
    <h1 className='text-4xl font-bold text-[#b1182e]'>Products</h1>    
    <CardBasic>
      { // Example product data
      cart1
      }
    </CardBasic> 

  </main>  )
}

export default Products