import React, { useState } from "react";
import tomato from "../assets/grilled-tomatoes.png";
import travelSnack from "../assets/meal-prep.png";
import postWorkout from "../assets/meal-prep-ideas.png";
import corn from "../assets/how-to-grill.png";
import crunchwrap from "../assets/crucnhwrap.png";
import cheese from "../assets/cheese-soup.png";
import Foodcard from "./Foodcard";
import { useStatStyles } from "@chakra-ui/react";
function Carousel() {
  const cardData = [
    {
      img: tomato,
      title: "Grilled  Tomatoes at Home",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      img: travelSnack,
      title: "Snacks for Travel",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      img: postWorkout,
      title: "Post-workout Recipes",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      img: corn,
      title: "How To Grill Corn",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      img: crunchwrap,
      title: "Crunchwrap Supreme",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      img: cheese,
      title: "Broccoli Cheese Soup",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
  ];

  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage, serperPage] = useState(3);

  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const totalPage=cardData.length/postPerPage;
  const filterpost = cardData.slice(firstIndex, lastIndex);


  function handlePrev(){
    if(firstIndex!=0)
    {
        setcurrentPage(currentPage-1);
    }

  }
  function handleNext(){
    if(lastIndex!=cardData.length)
    {
        setcurrentPage(currentPage+1);
    }
  

  }

  return (
    <section className="w-full lg:py-24 lg:px-28 pt-24 px-8">
      <article className="flex flex-col justify-normal lg:gap-24 gap-10 items-center lg:items-start">
        <h1 className="text-[#0E2368] font-semibold font-source text-4xl lg:text-5xl">
          Latest Articles
        </h1>
      </article>
      <article className="flex flex-row flex-wrap justify-normal gap-12 w-full mt-14">
        {filterpost.map((post, index) => {
          return (
            <Foodcard
              key={index}
              img={post.img}
              title={post.title}
              desc={post.desc}
            ></Foodcard>
          );
        })}
      </article>
      <article className="w-full flex items-center justify-center mt-14 gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="29"
          viewBox="0 0 28 29"
          fill="none"
          onClick={handlePrev}
          className="cursor-pointer"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.4419 22.8523C18.9949 22.5393 19.1753 21.7427 18.8083 21.234C18.706 21.0921 17.1257 19.6312 15.2964 17.9875L11.9704 14.999L15.2973 12.0101C17.127 10.3662 18.7074 8.90503 18.8093 8.76312C18.9289 8.59653 18.9947 8.35683 18.9951 8.08643C18.9956 7.71445 18.9549 7.6306 18.6296 7.33388C18.2955 7.02916 18.2193 7 17.7585 7H17.2535L13.1268 10.7639L9 14.5277V14.959C9 15.2142 9.06299 15.4772 9.15418 15.6029C9.37757 15.9112 16.5225 22.452 16.9588 22.7478C17.3877 23.0386 18.0326 23.084 18.4419 22.8523Z"
            fill={currentPage===1?"#AFAFAF" : " #424961"}
          />
          <rect
            x="0.5"
            y="0.5"
            width="27"
            height="28"
            rx="4.5"
            stroke={currentPage===1?"#AFAFAF" : " #424961"}
          />
        </svg>
        <p className= " caret-transparent text-[#424961] text-lg font-source font-normal">{currentPage}/{totalPage}</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="29"
          viewBox="0 0 28 29"
          fill="none"
          onClick={handleNext}
          className="cursor-pointer"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.55811 7.1477C9.00514 7.46068 8.82474 8.25727 9.19166 8.766C9.29397 8.9079 10.8743 10.3688 12.7036 12.0125L16.0296 15.001L12.7027 17.9899C10.873 19.6338 9.29256 21.095 9.19072 21.2369C9.07115 21.4035 9.00533 21.6432 9.00495 21.9136C9.00438 22.2855 9.04512 22.3694 9.37036 22.6661C9.70446 22.9708 9.78065 23 10.2415 23H10.7465L14.8732 19.2361L19 15.4723V15.041C19 14.7858 18.937 14.5228 18.8458 14.3971C18.6224 14.0888 11.4775 7.54798 11.0412 7.2522C10.6123 6.96142 9.96737 6.916 9.55811 7.1477Z"
            fill={currentPage===totalPage?"#AFAFAF" : "#424961"}
          />
          <rect
            x="0.5"
            y="0.5"
            width="27"
            height="28"
            rx="4.5"
            stroke={currentPage===totalPage?"#AFAFAF" : "#424961"}
          />
        </svg>
      </article>
    </section>
  );
}

export default Carousel;
