import Image from "next/image";

interface ProductCardProps {
  imageSrc: string;
  name: string;
  description: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, name, description, price }) => {
  return (
    <>
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <Image
          src={imageSrc}
          alt={name}
          width={300}
          height={400}
          className="w-full h-auto object-cover"
          quality={100}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
          <button className="bg-white text-yellow-700 font-semibold py-2 px-4 rounded">
            Add to cart
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center text-gray-500 text-sm mb-2">
          <button className="hover:text-gray-700">
            <span className="mr-2">🔗</span> Share
          </button>
          <button className="hover:text-gray-700">
            <span className="mr-2">⚖️</span> Compare
          </button>
          <button className="hover:text-gray-700">
            <span className="mr-2">❤️</span> Like
          </button>
        </div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-xl font-bold">{price}</p>
      </div>
    </div>
</>
  );
};

export default ProductCard;
