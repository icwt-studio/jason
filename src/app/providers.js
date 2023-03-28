'use client'

import { useServerInsertedHTML } from 'next/navigation'
import { NextUIProvider, CssBaseline, createTheme, Container } from '@nextui-org/react'

export default function Providers({ children, props }) {
  
  const data = props;

  useServerInsertedHTML(() => {
    return <>{CssBaseline.flush()}</>
  })



  const vibes90s = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      colors: {
        bodyColor:'#fd9ec1',

        link: '#00ad80',

        text: "#fff",

        linkButtonColor: '#9674cd',
        linkButtonBorderRadius:'100px',

        locationColor: '#9674cd',
        locationBorder: "1px solid #111",
        locationText: "#ffe48b",
        locationBorderRadius: '0px',

        badgesColor: "transparent",
        badgesBorder: '1px solid #ffe48b',
        badgesText: '#ffe48b',
        badgesBorderRadius: '0px',

        saleBorderRadius: '0px',
        saleBorderRadius: '0px',
        saleColor: '#9674cd', 
        saleButtonColor: '#c097ff'
      },
      space: {},
      fonts: {}
    }
  })



  const mint = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      colors: {
        // bodyColor:'linear-gradient(45deg, #4361c2, #4fa49a 50%, #9dc66b 95%);',
        bodyColor:'linear-gradient(90deg, rgba(180,58,96,1) 0%, rgba(253,29,29,1) 50%, rgba(254,201,127,1) 97%)',

        link: '#e3a0f0',

        textColor: "#fff",

        linkButtonColor: '#23777f',
        linkButtonBorderRadius: '15px',

        locationColor: 'transparent',
        locationBorder: "1px solid #fff;",
        locationText: "#fff",
        locationBorderRadius: '5px',

        badgesColor: "transparent",
        badgesBorder: '1px solid #fff',
        badgesText: '#fff',
        badgesBorderRadius: '5px',

        saleBorderRadius: '300px',
        saleButtonColor: '#94f9f026'
      },
      space: {},
      fonts: {
      }
    }
  })




  return (
    <>
      <NextUIProvider theme={mint}>
        <Container css={{maxWidth:'none', overflow:'auto', background:"$bodyColor", minHeight:'100vh'}}>
            {children}
        </Container>
      </NextUIProvider>
    </>
  )
}