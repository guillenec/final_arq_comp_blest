import { collection, getDocs } from "firebase/firestore"
import CarouselDesktop from "../../components/CarouselDesktop"
import HeaderDesktop from "../../components/HeaderDesktop"
import MenuDrawer from "../../components/MenuDrawer"
import ServiceCards from "../../components/ServiceCards"
import { db } from "../../firebase/config"
import type { Product } from "../../types/Products"
import { useEffect, useState } from "react"
import Loading from "../../components/Loading/Loading"

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]); // Assuming you will fetch products later
  const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
  
    const fetchProducts = async () => {

      try {
      const querySnapshot = await getDocs(collection(db, "remeras-cuad"));
      const fetchedProducts:Product[] = [];
      querySnapshot.forEach((doc) => {
        fetchedProducts.push({
          id: doc.id,
          ...doc.data() as Omit<Product, 'id'> // Assuming the data structure matches Product type
        });
      });

      setProducts(fetchedProducts);
      }
      catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false); //siempre que no haya un error, se setea loading a false
      }
      
    };

    fetchProducts();
  }, []);

  console.log("Productos",products);

  return (

  <main className='flex flex-col items-center justify-center h-full'>
    <HeaderDesktop />
    <MenuDrawer />
    <ServiceCards />

    {
      loading ? (
        <div className="flex items-center justify-center h-screen">
          <Loading />
        </div>
      ) : (
        <CarouselDesktop products={products} title="Remeras" />
      )
    }
    {/* <CarouselDesktop products={products} title="Buzos con capucha round" /> */}
    {/* <h1 className='text-4xl font-bold text-blue-950'>BlestApp Shop</h1>
    <p className='text-2xl font-bold text-emerald-900'>Welcome to the BlestApp Shop</p> */}
  </main>
  )
}

export default Home