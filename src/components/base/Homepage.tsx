import React from 'react'
import WordPullUp from '../ui/word-pull-up'
import Image from 'next/image'
import { Badge } from '../ui/badge'

export default function HomePage() {
  return (
    <div className='min-h-screen h-full flex flex-col justify-center items-center'>
        <div className='flex flex-wrap gap-6 pt-6'>
          <Image src='/pp.png' alt='pfp' width={140} height={140}  className='hidden md:flex object-contain' />
          <div className='max-w-4xl'>
            <WordPullUp
              className="font-bold text-black dark:text-white md:text-6xl text-4xl md:leading-[5rem]"
              words="Hi, I&apos;m Digvijay"
            />
            <WordPullUp
              className="mt-4 text-gray-600 dark:text-gray-400 text-[16px] md:text-[18px] max-w-3xl px-4"
              words="Developer. I love building cool stuffs. Nice meeting you, do check out my projects below."
            />
          </div>
          <div className='flex md:hidden justify-center items-center w-full h-full'>
          <Image src='/pfp2.jpeg' alt='pfp' width={150} height={150}  className='rounded-full w-[80px] object-contain' />
          </div>
        </div>
        <div className='h-full w-full flex flex-col justify-center items-center mt-14 md:mt-24' >
          <Badge className='text-[16px] rounded-xl'>Projects</Badge>
          <h1 className='font-bold text-center px-4 text-black mt-2 dark:text-white md:text-4xl text-3xl tracking-tight md:leading-[5rem]'>Check out my latest projects</h1>
          <p className='px-4 text-gray-600 dark:text-gray-400 text-[16px] md:text-[18px] max-w-2xl text-center'>I have worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
        </div>
    </div>
  )
}


