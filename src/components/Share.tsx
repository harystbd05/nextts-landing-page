import Image from "next/image";
import share from "../data/ShareData";

const Share = () => {
  return (
    <div className="p-4 md:p-8">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        Share your setup with
        <div>
          <span className="text-yellow-600">#FuniroFurniture</span>
        </div>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {share.map((item, index) => (
          <div
            key={index}
            className={`relative w-full h-64 ${
              index === 2 ? "col-span-1 md:col-span-2 row-span-1" : ""
            }`}
          >
            <Image
              src={item.imageSrc}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-70 p-2 rounded">
              <h3 className="text-lg font-bold">{item.title}</h3>
              {item.subtitle && (
                <p className="text-sm text-gray-500">{item.subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Share;
