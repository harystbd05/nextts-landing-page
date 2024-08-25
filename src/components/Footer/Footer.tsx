
const Footer = () => {


  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="border-t border-gray-300 pt-4 flex flex-wrap justify-between">
          {/* Left Section */}
          
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold mb-4">Funiro.</h2>
            <address className="not-italic text-sm text-gray-600">
              Jakarta, <br />
              Indonesia
            </address>
          </div>

          {/* Links Section */}
          <div className="w-full lg:w-1/3 flex justify-between mb-8 lg:mb-0">
            <div>
              <h3 className="font-semibold mb-4">Links</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Help</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><a href="#">Payment Options</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Privacy Policies</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="w-full lg:w-1/4">
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full border-gray-300 underline"
              />
              <button className="p-2 text-black underline">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t pt-4 text-sm text-gray-500 text-center lg:text-left">
          <p>2023 Funiro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}


export default Footer
