
'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Intro = () => {
  const childVariant = {
    hidden: {
      opacity: 0.5,
      y: 20,
      transition: {
        type: 'tween',
        duration: 0.3
      }
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        duration: 0.3
      }
    }
  }

  const parentVariant = {
    hidden: {},
    show: {
      transition: {
        duration: 0.3,
        staggerChildren: 0.05
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={'hidden'}
          animate={'show'}
          variants={parentVariant}
          className='p-8 my-4'
        >
          <div className='flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto'>
            <motion.div
              variants={childVariant}
              className="text-center md:text-left flex-1"
            >
              <h1 className='text-6xl md:text-8xl font-sans font-bold tracking-tight mb-6'>
                Sibhi
              </h1>
              <motion.p variants={childVariant} className='text-zinc-700 dark:text-zinc-400 text-lg leading-relaxed max-w-2xl'>
                Started programming at the age of 13, I got a keen interest towards Cyber Security and have explored multiple dimensions of it. I progressively worked on multiple technologies ranging from software to security, which gave me a brief exposure towards the industry. You can contact me for a coffee or to get your idea into code or to consult for your software, security needs .
              </motion.p>
            </motion.div>
            <motion.div
              variants={childVariant}
              className='overflow-hidden rounded-lg w-max h-max shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] border border-zinc-700/70'
            >
              <Image
                src={'/Main.webp'}
                height={250}
                width={250}
                alt='Krish'
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Intro
