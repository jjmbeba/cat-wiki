"use client";

import Footer from "@/app/Footer";
import { useQuery } from "react-query";
import Characteristic from "./Characteristic";

export default function Home({ params: { id } }) {
  const {isLoading, error, data} = useQuery('data',() => fetch(`http://localhost:3000/api/${id}`).then(res => res.json()))  
    
  if(isLoading) return 'Loading...'
    
    if(error) return 'An error has occurred'+error.message

    console.log(data);

  return (
    <div className="pt-[49px] pb-[273px] px-[18px] lg:px-0 lg:pl-[96px] relative">
      <div className=" flex items-center lg:items-start flex-col lg:flex-row gap-[18px] lg:gap-[100px] pl-0 lg:pl-[52px] pr-0 lg:pr-[154px]">
        <img
          src={data ? `https://cdn2.thecatapi.com/images/${data.reference_image_id}.jpg ` : ""}
          alt="cat-image"
          className="h-[200px] lg:h-[371px] w-[200px] lg:w-[371px] object-cover rounded-[24px]"
        />
        <div>
          <h2 className="font-[600] text-[24px] lg:text-[36px] leading-[28px] lg:leading-[44px] text-[#291507]">
            {data ? data.name : ""}
          </h2>
          <p className="pt-[25px] font-[500] text-[16px] lg:text-[18px] leading-[20px] lg:leading-[22px] text-[#291507]">
            {data ? data.description : ""}
          </p>
          <div className="characteristic">
            <span className="font-[700]">Temperament:</span>{" "}
            {data ? data.temperament : ""}
          </div>
          <div className="characteristic">
            <span className="font-[700]">Origin:</span>{" "}
            {data ? data.origin : ""}
          </div>
          <div className="characteristic">
            <span className="font-[700]">Life Span:</span>{" "}
            {data ? data.life_span : ""} years
          </div>
          <div>
            <Characteristic
              name="Adaptability"
              rating={data ? data.adaptability : ""}
            />
            <Characteristic
              name="Affection level"
              rating={data ? data.affection_level : ""}
            />
            <Characteristic
              name="Child friendly"
              rating={data ? data.child_friendly : ""}
            />
            <Characteristic
              name="Grooming"
              rating={data ? data.grooming : ""}
            />
            <Characteristic
              name="Intelligence"
              rating={data ? data.intelligence : ""}
            />
            <Characteristic
              name="Health issues"
              rating={data ? data.health_issues : ""}
            />
            <Characteristic
              name="Social needs"
              rating={data ? data.social_needs : ""}
            />
            <Characteristic
              name="Stranger friendly"
              rating={data ? data.stranger_friendly : ""}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
