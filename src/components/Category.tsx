import Image from "next/image";

const Category = () => {
  return (
    <div className="bg-white p-8">
      <div className="text-center mb-8">
        <h1 className="font-bold text-3xl mb-2">Browse The Range</h1>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      
      <div className="flex justify-center space-x-8">
        {/* Dining */}
        <div className="text-center">
          <Image
            src="/dining.jpeg" // Replace with your actual image path
            alt="Dining"
            width={300}
            height={400}
            className="rounded-lg"
          />
          <p className="mt-2 font-semibold">Dining</p>
        </div>

        {/* Living */}
        <div className="text-center">
          <Image
            src="/living.jpg" // Replace with your actual image path
            alt="Living"
            width={300}
            height={400}
            className="rounded-lg"
          />
          <p className="mt-2 font-semibold">Living</p>
        </div>

        {/* Bedroom */}
        <div className="text-center">
          <Image
            src="/bedroom.jpeg" // Replace with your actual image path
            alt="Bedroom"
            width={300}
            height={400}
            className="rounded-lg"
          />
          <p className="mt-2 font-semibold">Bedroom</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
