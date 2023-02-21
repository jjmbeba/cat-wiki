import './globals.css'
import { Montserrat } from '@next/font/google'
import Image from 'next/image';
import Head from './head';

const montserrat = Montserrat({
  subsets:['latin'],
  weight:['500','600','700']
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head/>
      <body className={`${montserrat.className}`}>
      <header>
        <div className='lg:pl-[96px] lg:pt-[36px] pl-[18px] pt-[23px]'>
          <Image
            src='/logo.svg'
            width={127}
            height={42}
            alt='logo'
            className='hidden lg:block'
          />
          <Image
            src='/logo.svg'
            width={147}
            height={33}
            alt='logo'
            className='lg:hidden block'
          />
        </div>
      </header>
        {children}
      </body>
    </html>
  )
}
