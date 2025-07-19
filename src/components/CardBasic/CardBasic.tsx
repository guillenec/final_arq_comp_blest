type Talle = {
  s: number
  m: number
  l: number
  xl: number
}

type Images_serv = {
  image1?: string
  image2?: string
  image3?: string
  image4?: string
}

type Props = {
  // Define any props you want to pass to the CardBasic component
  // For example, you might want to pass product details like name, price, etc.
  name?: string;
  price?: number;
  id?: string;
  images?: Images_serv;
  description?: string;
  // You can add more props as needed
  tipo?: string;
  talle?: Talle ;
  // Add any other props you need for styling or functionality
  onAddToCart?: () => void;

}

const CardBasic = (props: Props) => {
  const handleclick = () => {
    if (props.onAddToCart) {
      props.onAddToCart();
    } else {
      console.log("Add to cart function not provided");
    }
  }
  return (
  <div className="w-60 h-80 bg-gray-50 p-3 flex flex-col gap-1">
    <div className="duration-500 contrast-50 h-48 w-full relative bg-gradient-to-bl from-black via-orange-900 to-indigo-600  hover:contrast-100 overflow-hidden ">
      <img src={props.images?.image1 || "https://res.cloudinary.com/dpiwmbsog/image/upload/v1751235999/blest-shop/buzo_c_capucha/wxdk6hrnzhxu2g9dj5xh.png"} alt="imagen general card" className="w-full h-full object-cover"/>
    </div>
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <span className="text-xl font-bold">{props.name || "long Chair"}</span>
          <p className="text-xs text-gray-700">ID: {props.id || "23432252"}</p>
        </div>
        <span className="font-bold  text-red-600">${props.price || 25.99}</span>
      </div>
      <button  className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2" onClick={handleclick}>Add to cart</button>
    </div>
  </div>

  )
}

export default CardBasic