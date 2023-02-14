import Footer from "@/app/Footer";
import catArr from "@/CatsArr";
import Characteristic from "./Characteristic";

export default function Home({ params : {id} }) {

  const foundCat = catArr.find((cat) => cat.id === id);

  // let {
  //   description,
  //   life_span,
  //   temperament,
  //   origin,
  //   adaptability,
  //   affection_level,
  //   child_friendly,
  //   grooming,
  //   intelligence,
  //   health_issues,
  //   social_needs,
  //   stranger_friendly,
  //   image,
  // } = foundCat;

  return (
    <div className="pt-[49px] pb-[273px] pl-[96px] relative">
      <div className=" flex gap-[100px] pl-[52px] pr-[154px]">
        <img
          src={foundCat ? foundCat.image.url : ''}
          alt="cat-image"
          className="h-[371px] w-[371px] object-cover rounded-[24px]"
        />
        <div>
          <h2 className="font-[600] text-[36px] leading-[44px] text-[#291507]">
            {foundCat ? foundCat.name : ''}
          </h2>
          <p className="pt-[25px] font-[500] text-[18px] leading-[22px] text-[#291507]">
            {foundCat ? foundCat.description : ''}
          </p>
          <div className="characteristic">
            <span className="font-[700]">Temperament:</span> {foundCat ? foundCat.temperament : ''}
          </div>
          <div className="characteristic">
            <span className="font-[700]">Origin:</span> {foundCat ? foundCat.origin : ''}
          </div>
          <div className="characteristic">
            <span className="font-[700]">Life Span:</span> {foundCat ? foundCat.life_span : ''} years
          </div>
          <div>
            <Characteristic name='Adaptability' rating={foundCat ? foundCat.adaptability : ''}/>
            <Characteristic name='Affection level' rating={foundCat ? foundCat.affection_level : ''}/>
            <Characteristic name='Child friendly' rating={foundCat ? foundCat.child_friendly : ''}/>
            <Characteristic name='Grooming' rating={foundCat ? foundCat.grooming : ''}/>
            <Characteristic name='Intelligence' rating={foundCat ? foundCat.intelligence : ''}/>
            <Characteristic name='Health issues' rating={foundCat ? foundCat.health_issues : ''}/>
            <Characteristic name='Social needs' rating={foundCat ? foundCat.social_needs : ''}/>
            <Characteristic name='Stranger friendly' rating={foundCat ? foundCat.stranger_friendly : ''}/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

