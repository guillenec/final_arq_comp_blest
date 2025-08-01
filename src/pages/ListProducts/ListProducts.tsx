import { useEffect, useState } from "react";
import CardBasic from "../../components/CardBasic/CardBasic"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import type { Product } from "../../types/Products";
import CardSkeleton from "../../components/CardSkeleton/CardSkeleton";

const ListProducts = () => {
  const [products, setProducts] = useState<Product[]>([]); // Assuming you will fetch products later
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
  
    const fetchProducts = async () => {

      try {
      const querySnapshot = await getDocs(collection(db, "buzos_con_capucha_round"));
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


  return (
  <main className=' w-full min-h-96 h-auto max-w-[1300px] bg-amber-[#f3f0e3] flex flex-col items-center justify-center relative py-5'>
    <h1 className='text-4xl font-bold text-[#b1182e]'>Products</h1>    
    {/* <CardBasic {...product1}/> */}
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {
      loading
        ? 
        Array.from({ length: 8 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))
        : products.map((product) => (
          <CardBasic key={product.id} {...product} />
        ))
      }
    </div>

  </main>  )
}

export default ListProducts