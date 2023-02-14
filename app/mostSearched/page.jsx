import Footer from "../Footer";
import MostCats from "./MostCats";
import MostHeader from "./MostHeader";

export default function Home(){
    return(
        <div className="pt-[50px] pl-[96px] pr-[240px] relative">
            <MostHeader/>
            <MostCats/>
            <Footer/>
        </div>
    )
}