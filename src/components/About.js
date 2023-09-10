import React from 'react'
import about from "../assets/about.png"
function About() {
  return (
    <section >
   <article className='about-us w-full flex  lg:mt-24 mt-10 items-center justify-between gap-36  lg:px-56'>
<article className='lg:flex hidden h-full'>
    <img src={about} alt='About-us image' className='w-80 h-full'></img>
</article>
<article className='lg:w-[40%]  flex gap-6 px-8 py-16 flex-col lg:m-auto lg:items-start items-center'>
    <h1 className='font-poppins text-[#0E2368] lg:text-left text-center lg:text-5xl text-3xl font-semibold '>About Us</h1>
    <p className='lg:text-base p-2 text-sm text-[#444957] font-normal font-open lg:text-left text-center '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
    <button className='font-source text-base font-semibold text-white bg-[#E23744] text-center px-5 py-3 rounded-3xl'>Read More</button>
</article>


   </article>
   </section>
  )
}

export default About