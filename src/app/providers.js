'use client'

import { useServerInsertedHTML } from 'next/navigation'
import { NextUIProvider, CssBaseline, createTheme, Container } from '@nextui-org/react';


export default function Providers({ children }) {
  
  useServerInsertedHTML(() => {
    return <>{CssBaseline.flush()}</>
  })

  const mint = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      colors: {
        bodyColor:'linear-gradient(45deg, #4361c2, #4fa49a 50%, #9dc66b 95%);',
        link: '#e3a0f0',
        headerColor: "#fff",
        linkButtonColor: '#23777f',
        locationColor: 'transparent',
        locationBorder: "1px solid #fff;",
        locationText: "#fff",
        badgesColor: "transparent",
        badgesBorder: '1px solid #fff',
        pepe: "5px"
      },
      space: {},
      fonts: {}
  }
  })

  const red = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      colors: {
        bodyColor:'red',
        link: '#333',
        headerColor: "#153",
        linkButtonColor: '#23567f',
        locationColor: 'transparent',
        locationBorder: "1px solid #f58;",
        locationText: "#67d",
        badgesColor: "transparent",
        badgesBorder: '1px solid #fdf',
        pepe: "5px"
      },
      space: {},
      fonts: {}
  }
  })

  return (
    <>
      <NextUIProvider theme={mint}>
        <Container css={{maxWidth:'none', overflow:'auto', background:"$bodyColor"}}>
            {children}
        </Container>
      </NextUIProvider>
    </>
  )
}