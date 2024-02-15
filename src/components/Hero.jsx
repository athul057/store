import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';
import { BsTranslate } from 'react-icons/bs';
const imagess = [
 hero1,
 hero2,
 hero3,
 hero4
];

const Hero = () => {

 const [prevIndex, setCurrentIndex] = useState(0);
 const [images, setImages] = useState(imagess);



 const handleClick = (index) => {
  setCurrentIndex(index);
 }
 const handleNext = () => {
  setCurrentIndex((oldValue) => {

   const newVal = oldValue === images.length - 1 ? 0 : oldValue + 1;
   return newVal;
  })
 };

 const handlePrev = () => {
  setCurrentIndex((oldValue) => {

   const newVal = oldValue === 0 ? images.length - 1 : oldValue - 1;
   return newVal;

  })
 };
 useEffect(() => {
  let slide = setInterval(() => { handleNext(); }, 10000);
  return () => {
   clearInterval(slide);
  }

 }, [prevIndex])
 return (


  <>
   <div className='grid grid-cols-2 gap-24 items-center'>

    <div>
     <h1 className='text-6xl font-bold tracking-tight max-w-2xl mt-8 leading-normal'>We are changing the way people shop</h1>
     <p className='tracking-wide leading-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores possimus laboriosam ipsa error ex veniam labore laudantium, quas eligendi velit vitae explicabo pariatur quisquam, est impedit facere? Quaerat, autem totam.</p>
     <div className=' mt-6'>
      <Link to='/products' className='btn btn-secondary'>Our Products</Link>
     </div>
    </div>
    <div className='relative w-100 h-3/5 '>

     <section className='relative w-full h-full rounded-xl overflow-hidden' >
      <div className='flex transiton ease-out duration-300'  >
       {images.map((image, index) => {
        return (

         <img key={index} className='  ease-out duration-[500ms] transform block object-center' src={image} alt="img" style={{ transform: `translateX(-${100 * prevIndex}%)` }} />

        )
       })}
      </div>



      <div className='absolute inset-0 flex justify-between items-center'>
       <FaAngleLeft className='size-16 hover:bg-slate-200' onClick={() => handlePrev()} />
       <FaAngleRight className='size-16 hover:bg-slate-200' onClick={() => handleNext()} />
      </div>

      <div className='flex absolute justify-center bottom-4 items-center  gap-2 mx-20'>
       {
        images.map((image, index) => {
         return <div key={index} className='rounded-full w-5 h-5 bg-slate-200' style={{ background: prevIndex === index ? 'pink' : 'white' }} onClick={() => handleClick(index)}> </div>
        })
       }
      </div>


     </section>

    </div>
   </div>

  </>
 )






}
export default Hero;