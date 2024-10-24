
import Hero from "@/app/Components/Hero/Hero"
import Pheading from "@/app/Components/pheading"
import Products from "@/app/Components/Products/Products"
import Vheading from "@/app/Components/Vheading"
import Video from "@/app/Components/Video/Video"
import Header from "./Components/Header"
import About from "@/app/Components/About/About"
import Footer from "@/app/Components/Footer/Footer"

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
     <Header/>
 <Hero/>
 <Pheading/>
 <Products/>
 <Vheading/>
 <Video/>
 <About/>
 <Footer/>
    </div>
  );
}
