import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <section className='relative overflow-hidden'>
      <div className='container relative z-10'>
        <div className='pt-12 md:pt-24 xl:pt-[216px]'>
          <div className='md:absolute md:top-24 xl:top-28 md:right-8 xl:right-0 z-20'>
            <Image alt='Nodespec' src={"/nodespec.png"} width={100} height={100} className='w-full h-full' />
          </div>
          <h1 className='text-[2.7rem] font-light leading-none md:leading-tight xl:leading-[80px] lg:text-6xl xl:text-7xl -tracking-[1%] max-w-2xl xl:max-w-4xl text-balance text-center md:text-left'>
            <span className='bg-gradient-to-tr from-primary to-foreground bg-clip-text text-transparent'>
              Premium
            </span>
            {" Agency for Creatives"}
          </h1>
          <h2 className='my-6 text-base text-foreground/80 sm:px-0 font-normal lg:my-[22px] lg:text-lg md:w-11/12 lg:max-w-xl text-balance text-center md:text-left'>
            We specialize in crafting unique digital presence
            that help businesses grow and stand out in their industries.
          </h2>
          <div className='flex gap-4 py-4'>
            <Button>
              Connect with us
            </Button>
            <Button variant={'ghost'}>
              About NodeSpec
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
