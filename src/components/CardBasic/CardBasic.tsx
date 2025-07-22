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
  <div className="w-64 h-[400px] bg-gray-50 p-1 flex flex-col gap-1 rounded-md">
    <div className="duration-500 contrast-50 h-52 w-full relative bg-gradient-to-bl from-black via-orange-900 to-indigo-600  hover:contrast-100 rouned-md overflow-hidden">
      <img src={props.images?.image1 || "https://res.cloudinary.com/dpiwmbsog/image/upload/v1751235999/blest-shop/buzo_c_capucha/wxdk6hrnzhxu2g9dj5xh.png"} alt="imagen general card" className="w-full h-full object-cover"/>
    </div>
    <div className="flex flex-col items-start justify-evenly gap-1 pl-3 py-2 min-h-50">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-[22px] font-roboto font-extrabold capitalize text-[#b1182e]">{props.name || "long Chair"}</h1>
          <h2 className="text-1xl text-gray-900 font-anton">${props.price || 25.99}</h2>
          <p className="text-xs text-[#b1182e] font-roboto font-light"> 6 X {props.price !== undefined ? ((props.price + (0.25 * props.price))/6).toFixed(2) : "XXXX"}</p>
      </div>
      <button className="w-36 rounded-md hover:bg-[#f3f0e3] hover:text-[#b1182e] text-white bg-[#b1182e] py-2 font-anton text-md shadow-md transition ease-in duration-100" onClick={handleclick}>Comprar</button>
    </div>
  </div>

  )
}

export default CardBasic