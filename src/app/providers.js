'use client'

import { useServerInsertedHTML } from 'next/navigation'
import { NextUIProvider, CssBaseline, createTheme, Container } from '@nextui-org/react'
import JHeader from './components/jason/JHeader';
// import TableFooter from '@nextui-org/react/types/table/table-footer';

export default function Providers({ children, props }) {
  
  const data = props;

  useServerInsertedHTML(() => {
    return <>{CssBaseline.flush()}</>
  })



  const vibes90s = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      
      colors: {
        link: '#00ad80',
      },

      body: {
        background: '#fd9ec1'
      },

      JText: {
        color: '#ffe48b'
      },

      JH1: {
        color: '#ffe48b'
      },

      JH2: {
        color: '#ffe48b'
      },

      JH3: {
        color: '#ffe48b'
      },

      JH4: {
        color: '#ffe48b'
      },

      JLinkButton: {
        color: '#ffe48b',
        background: '#9674cd',
        borderRadius: '0px'
      },
      
      JBadges: {
        color: '#ffe48b',
        border: '1px solid #ffe48d',
        borderRadius: '0px',
        background: 'transparent'
      },
      
      JSale: {
        borderRadius: '0px',
        footerBackground: '#9674cd',
        buttonBackground: '#c097ff',
        buttonColor: '#94f9f0',
        buttonBorderRadius: '0px'
      },

      JLocation: {
        color: '#ffe48d',
        background: '#9674cd',
        border: '1px solid #111',
        borderRadius: '0px'
      },

      JHeader: {
        titleColor: '#ffe48b',
        descriptionColor: '#ffe48b'
      }
    }
  })


  const mint = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      
      colors: {
        link: '#e3a0f0',
      },

      body: {
        background: 'linear-gradient(45deg, #4361c2, #4fa49a 50%, #9dc66b 95%)'
      },

      JText: {
        color: '#fff'
      },

      JH1: {
        color: '#fff'
      },

      JH2: {
        color: '#fff'
      },

      JH3: {
        color: '#fff'
      },

      JH4: {
        color: '#fff'
      },

      JLinkButton: {
        color: '#fff',
        background: '#23777f',
        borderRadius: '5px'
      },
      
      JBadges: {
        color: '#fff',
        border: '1px solid #fff',
        borderRadius: '5px',
        background: 'transparent'
      },
      
      JSale: {
        borderRadius: '5px',
        footerBackground: 'transparent',
        buttonBackground: "#94f9f026",
        buttonColor: '#94f9f0',
        buttonBorderRadius: '5px'
      },

      JLocation: {
        color: '#fff',
        background: 'transparent',
        border: '1px solid #fff',
        borderRadius: '5px'
      },

      JHeader: {
        titleColor: '#fff',
        descriptionColor: '#fff'
      }
    }
  })







  return (
    <>
      <NextUIProvider theme={mint}>
        <Container css={{maxWidth:'none', overflow:'auto', background:"$body$background", minHeight:'100vh'}}>
            {children}
        </Container>
      </NextUIProvider>
    </>
  )
}