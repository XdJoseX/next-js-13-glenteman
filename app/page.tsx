import React, { Suspense } from 'react'
import { Navigator } from '@/components';
import { Routes } from '@/models';
import Image from 'next/image';
import SpaceGod from '@/public/images/spaceGod.jpeg';
import { pacifico, spaceGodBlur } from './models';
import Script from 'next/script';


function App() {
  return (
    <Suspense>
      <Script
      dangerouslySetInnerHTML={{
        __html:`
        document.body.style.backgroundColor = '#f0f0f0';
        `, 
      }} />
    <div className={pacifico.className}>
      <h1>welcome to Rick and Morty app</h1>
      <h2>what do you want to see?</h2>
      <Navigator pathName={[Routes.CHARACTERS, Routes.LOCATIONS]} />
      <div style={{width: '500px', height: '500px'}}>
        <Image style={{width: '100%', height: '100%', objectFit: 'cover'}} src={SpaceGod} 
        blurDataURL={spaceGodBlur} placeholder="blur" alt="space" />
      </div>
    </div>
    </Suspense>
  )
}


export default App;