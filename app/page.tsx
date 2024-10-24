
import Hero from "@/app/Components/Hero/Hero"
import Pheading from "@/app/Components/pheading"
import Products from "@/app/Components/Products/Products"
import Vheading from "@/app/Components/Vheading"
import Video from "@/app/Components/Video/Video"

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
     
 <Hero/>
 <Pheading/>
 <Products/>
 <Vheading/>
 <Video/>
    </div>
  );
}
