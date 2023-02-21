import { Montserrat } from "@next/font/google";
import Benefits from "./Benefits";
import Footer from "./Footer";
import Hero from "./Hero";
import MostSearched from "./MostSearched";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function Home() {
  return (
    <main className="pt-[23px] lg:pt-[30px] px-[18px] lg:px-[96px] w-screen h-auto pb-[181px] lg:pb-[209px] relative">
      <Hero/>
      <MostSearched/>
      <Benefits/>
      <Footer/>
    </main>
  );
}
