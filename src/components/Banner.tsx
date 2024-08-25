import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <section className="relative bg-gray-100">
        <div className="absolute inset-0">
          <Image
            src="/mount-bromo.jpg"
            alt="banner background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-end min-h-screen">
          <div className="bg-coklat p-8 rounded-lg max-w-lg text-left">
            <p className="text-sm font-semibold uppercase text-gray-700">
              New Arrival
            </p>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Discover Our New Collection
            </h1>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700">
              Buy Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
