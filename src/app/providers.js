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

      JHeader: {
        titleColor: '#ffe48b',
        descriptionColor: '#ffe48b'
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

      JHeader: {
        titleColor: '#fff',
        descriptionColor: '#fff'
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
      }
    }
  })


  const wellb = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      
      colors: {
        link: '#39bcb1',
      },

      body: {
        background: '#0c0549'
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

      JHeader: {
        titleColor: '#fff',
        descriptionColor: '#fff'
      },

      JLinkButton: {
        color: '#fff',
        background: '#e330ef',
        borderRadius: '8px 55px'
      },
      
      JBadges: {
        color: '#fff',
        border: 'none',
        borderRadius: '100px',
        background: '#6b25ff'
      },
      
      JSale: {
        borderRadius: '10px',
        footerBackground: 'transparent',
        buttonBackground: "#94f9f026",
        buttonColor: '#94f9f0',
        buttonBorderRadius: '10px'
      },

      JLocation: {
        color: '#fff',
        background: '#6b25ff',
        border: 'none',
        borderRadius: '10px'
      }
    }
  })


  const clean = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      
      colors: {
        link: '#007bff',
      },

      body: {
        background: '#f1f4fb'
      },

      JText: {
        color: '#555762'
      },

      JH1: {
        color: '#555762'
      },

      JH2: {
        color: '#555762'
      },

      JH3: {
        color: '#555762'
      },

      JH4: {
        color: '#555762'
      },

      JHeader: {
        titleColor: '#555762',
        descriptionColor: '#555762'
      },

      JLinkButton: {
        color: '#fff',
        background: '#6157ea',
        borderRadius: '500px'
      },
      
      JBadges: {
        color: '#707584',
        border: 'none',
        borderRadius: '100px',
        background: '#d2ddfa'
      },
      
      JSale: {
        borderRadius: '30px',
        footerBackground: 'transparent',
        buttonBackground: "#94f9f026",
        buttonColor: '#94f9f0',
        buttonBorderRadius: '30px'
      },

      JLocation: {
        color: '#fff',
        background: '#d2ddfa',
        border: 'none',
        borderRadius: '30px'
      }
    }
  })


  const blue = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      
      colors: {
        link: '#8abdf4',
      },

      body: {
        background: '#3f51b5'
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

      JHeader: {
        titleColor: '#fff',
        descriptionColor: '#fff'
      },

      JLinkButton: {
        color: '#fff',
        background: '#0c144c',
        borderRadius: '10px'
      },
      
      JBadges: {
        color: '#fff',
        border: 'none',
        borderRadius: '100px',
        background: '#2d3b8f'
      },
      
      JSale: {
        borderRadius: '10px',
        footerBackground: 'transparent',
        buttonBackground: "#94f9f026",
        buttonColor: '#94f9f0',
        buttonBorderRadius: '10px'
      },

      JLocation: {
        color: '#fff',
        background: 'transparent',
        border: '3px solid #2d3b8f',
        borderRadius: '10px'
      }
    }
  })


  const philadelphia = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      
      colors: {
        link: '#eba3ff',
      },

      body: {
        background: '#fff'
      },

      JText: {
        color: '#5a577b'
      },

      JH1: {
        color: '#5a577b'
      },

      JH2: {
        color: '#5a577b'
      },

      JH3: {
        color: '#5a577b'
      },

      JH4: {
        color: '#5a577b'
      },

      JHeader: {
        titleColor: '#5a577b',
        descriptionColor: '#5a577b'
      },

      JLinkButton: {
        color: '#fff',
        background: '#7c72ff',
        borderRadius: '10px'
      },
      
      JBadges: {
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        background: '#eba3ff'
      },
      
      JSale: {
        borderRadius: '10px',
        footerBackground: 'transparent',
        buttonBackground: "#94f9f026",
        buttonColor: '#94f9f0',
        buttonBorderRadius: '10px'
      },

      JLocation: {
        color: '#fff',
        background: '#7c72ff',
        border: 'none',
        borderRadius: '10px'
      }
    }
  })


  const blueberry = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      
      colors: {
        link: '#18cd91',
      },

      body: {
        background: '#6856ff'
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

      JHeader: {
        titleColor: '#fff',
        descriptionColor: '#fff'
      },

      JLinkButton: {
        color: '#fff',
        background: '#e330ef',
        borderRadius: '100px'
      },
      
      JBadges: {
        color: '#fff',
        border: 'none',
        borderRadius: '100px',
        background: '#6b25ff'
      },
      
      JSale: {
        borderRadius: '10px',
        footerBackground: 'transparent',
        buttonBackground: "#94f9f026",
        buttonColor: '#94f9f0',
        buttonBorderRadius: '10px'
      },

      JLocation: {
        color: '#fff',
        background: '#7c72ff',
        border: 'none',
        borderRadius: '10px'
      }
    }    
  })


  const citric = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      
      colors: {
        link: '#8abdf4',
      },

      body: {
        background: 'linear-gradient(90deg, rgba(180,58,96,1) 0%, rgba(253,29,29,1) 50%, rgba(254,201,127,1) 97%)'
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

      JHeader: {
        titleColor: '#fff',
        descriptionColor: '#fff'
      },

      JLinkButton: {
        color: '#fff',
        background: '#a02a46',
        borderRadius: '10px'
      },
      
      JBadges: {
        color: '#fff',
        border: 'none',
        borderRadius: '100px',
        background: '#c63f48'
      },
      
      JSale: {
        borderRadius: '10px',
        footerBackground: 'transparent',
        buttonBackground: "#94f9f026",
        buttonColor: '#94f9f0',
        buttonBorderRadius: '10px'
      },

      JLocation: {
        color: '#fff',
        background: '#ff725c',
        border: 'none',
        borderRadius: '10px'
      }
    }    
  })


  const pinkGrapefruit = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      
      colors: {
        link: '#740343',
      },

      body: {
        background: 'linear-gradient(45deg, #726193, #e37b7c 20%, #ffe4b4)'
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

      JHeader: {
        titleColor: '#fff',
        descriptionColor: '#fff'
      },

      JLinkButton: {
        color: '#fff',
        background: '#740343',
        borderRadius: '100px'
      },
      
      JBadges: {
        color: '#9a6c8e',
        border: 'none',
        borderRadius: '100px',
        background: '#feebd7'
      },
      
      JSale: {
        borderRadius: '10px',
        footerBackground: 'transparent',
        buttonBackground: "#94f9f026",
        buttonColor: '#94f9f0',
        buttonBorderRadius: '10px'
      },

      JLocation: {
        color: '#fff',
        background: '#ffffff08',
        border: 'none',
        borderRadius: '10px',
        boxShadow: '0px 2px 8px #c474848f'
        
      }
    }    
  })


  const nature = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      
      colors: {
        link: '#18cd91',
      },

      body: {
        background: '#e9dbff'
      },

      JText: {
        color: '#732324'
      },

      JH1: {
        color: '#732324'
      },

      JH2: {
        color: '#732324'
      },

      JH3: {
        color: '#732324'
      },

      JH4: {
        color: '#732324'
      },

      JHeader: {
        titleColor: '#732324',
        descriptionColor: '#732324'
      },

      JLinkButton: {
        color: '#fff',
        background: '#af81ef',
        borderRadius: '10px'
      },
      
      JBadges: {
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        background: '#e7a5fb'
      },
      
      JSale: {
        borderRadius: '10px',
        footerBackground: 'transparent',
        buttonBackground: "#94f9f026",
        buttonColor: '#94f9f0',
        buttonBorderRadius: '10px'
      },

      JLocation: {
        color: '#fff',
        background: '#671dcc',
        border: 'none',
        borderRadius: '10px'
      }
    }    
  })



  return (
    <>
      <NextUIProvider theme={nature}>
        <Container css={{maxWidth:'none', overflow:'auto', background:"$body$background", minHeight:'100vh'}}>
            {children}
        </Container>
      </NextUIProvider>
    </>
  )
}