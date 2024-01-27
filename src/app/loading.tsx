'use client'
import React from 'react';
import { lineWobble } from 'ldrs'
import Image from 'next/image';
import Particle from '@/components/LoaderAnimation'
import Section from '@/components/Sections';
// lineWobble.register()
    function Loading() {
        return (
            
            <div className='bg-black  w-screen h-screen'>
              <Section>
              <Particle/>
              <div className='flex justify-center pt-5'>    
                  <div><Image src={'/images/logo.png'} alt="logo" width={400} height={400} /></div>
              </div>
                  <h1 className='text-white text-center text-7xl pb-2'>Welcome To GSE</h1>
              <div className='flex justify-center '>
              {/* <l-line-wobble
      size="150"
      stroke="5"
      bg-opacity="0.1"
      speed="0.9" 
      color="white" 
      ></l-line-wobble> */}

    
              </div>
      </Section>
        </div>
      );
    }
    
    export default Loading;
     
  
    
   


    
    // Default values shown
 
    
    
  
 