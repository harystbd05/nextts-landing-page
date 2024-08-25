import products from "../data/ProductData"
import ProductCard from "./Product/ProductCard"


const Product = () => {
  return (
    <>
    <div className="p-8">
        <h2 className="text-center text-3xl font-bold mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
                     <ProductCard
                     key={index}
                     imageSrc={product.imageSrc}
                     name={product.name}
                     description={product.description}
                     price={product.price} 
                     

                     />
                    ))}

        </div>

        <div className="text-center mt-8">
            <button className="border border-yellow-600 text-yellow-600 font-semibold py-2 px-4 rounded hover:bg-yellow-600 hover:text-white transition-colors">
                Show More
            </button>

        </div>
      
    </div>
    </>
  )
}

export default Product
