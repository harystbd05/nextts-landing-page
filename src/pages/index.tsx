import Banner from "@/components/Banner";
import Category from "@/components/Category";
import Footer from "@/components/Footer/Footer";
import Inspirations from "@/components/Inspirations";
import Navbar from "@/components/Navbar/Navbar";
import Product from "@/components/Product";
import Share from "@/components/Share";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
     <main>
          <Navbar />
        
          <Banner />
          <Category />
          <Product />
        
          <Inspirations />
          <Share />

          <Footer />
     </main>
  );
}
