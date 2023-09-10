import React from 'react'
import truck from"../assets/truck.svg";
import instgram from "../assets/insta.svg"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg";

function Footer() {
  return (
    <section className='bg-[#F8F8F8] w-full flex flex-col lg:flex-row mt-10 items-center justify-between gap-10 lg:pt-24 lg:px-24 py-14 px-8'>
<article>
    <img src={truck}></img>
</article>
<article className='flex flex-col justify-between items-start gap-4 lg:w-1/4 w-full'>
<h1 className='text-lg font-source font-semibold  text-[#0E2368]'>Contact Us</h1>
<p className='text-[#646874] text-sm font-normal font-source text-left'>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
<p className='text-[#646874] text-sm font-normal font-source'>example2020@gmail.com</p>
<p className='text-[#646874] text-sm font-normal font-source'>(904) 443-0343</p>
</article>
<article className='flex flex-col justify-between items-start gap-4 lg:w-1/4 w-full'>
<h1 className='text-lg font-source font-semibold  text-[#0E2368]'>More</h1>
<p className='text-[#646874] text-sm font-normal font-source text-left'>About Us</p>
<p className='text-[#646874] text-sm font-normal font-source'>Products</p>
<p className='text-[#646874] text-sm font-normal font-source'>Careers</p>
<p className='text-[#646874] text-sm font-normal font-source'>Contact Us</p>
</article>
<article className='flex lg:flex-col flex-col-reverse justify-between lg:items-start items-center gap-4 lg:w-1/4 w-full '>

    <header className='lg:flex hidden flex-col justify-between items-center w-full'>
        <h1 className='text-[#0E2368] font-source font-semibold text-md'>Social Links</h1>
    </header>
    <main className='flex justify-center gap-4 items-center w-full'>
        <img src={instgram} alt='instagram' className='w-6 h-6'></img>
        <img src={twitter} alt='twitter' className='w-6 h-6'></img>
        <img src={facebook} alt='facebook' className='w-6 h-6'></img>
    </main>
    
<p className='font-source font-normal tetx-sm text-[#828B9C] lg:mt-16'>© 2022 Food Truck Example</p>
</article>
    </section>
  )
}

export default Footer