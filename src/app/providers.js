'use client'

import { useServerInsertedHTML } from 'next/navigation'
import { NextUIProvider, CssBaseline, createTheme, Container } from '@nextui-org/react'
import RetroMonitor from "./components/jason/templates/retromonitor/RetroMonitor"

export default function Providers({ children, template, }) {

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
        backgroundColor: '#fd9ec1',
        backgroundImage: 'none',
        backgroundPositionX: 'none',
        backgroundSize: 'none'
      },

      JText: {
        color: '#ffe48b',
        textShadow: 'none'
      },

      JH1: {
        color: '#ffe48b',
        textShadow: 'none'
      },

      JH2: {
        color: '#ffe48b',
        textShadow: 'none'
      },

      JH3: {
        color: '#ffe48b',
        textShadow: 'none'
      },

      JH4: {
        color: '#ffe48b',
        textShadow: 'none'
      },

      JLinkButton: {
        color: '#ffe48b',
        background: '#9674cd',
        borderRadius: '0px',
        border: "none"
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
        borderRadius: '0px',
        boxShadow: 'none'
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
        backgroundColor: '#fff',
        backgroundImage: 'linear-gradient(45deg, #4361c2, #4fa49a 50%, #9dc66b 95%)',
        backgroundPositionX: 'none',
        backgroundSize: 'none'
      },

      JText: {
        color: '#fff',
        textShadow: 'none'
      },

      JH1: {
        color: '#fff',
        textShadow: 'none'
      },

      JH2: {
        color: '#fff',
        textShadow: 'none'
      },

      JH3: {
        color: '#fff',
        textShadow: 'none'
      },

      JH4: {
        color: '#fff',
        textShadow: 'none'
      },

      JLinkButton: {
        color: '#fff',
        background: '#23777f',
        borderRadius: '5px',
        border: "none"
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
        borderRadius: '5px',
        boxShadow: 'none'
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
        backgroundColor: '#0c0549',
        backgroundImage: 'none',
        backgroundPositionX: 'none',
        backgroundSize: 'none'
      },

      JText: {
        color: '#fff',
        textShadow: 'none'
      },

      JH1: {
        color: '#fff',
        textShadow: 'none'
      },

      JH2: {
        color: '#fff',
        textShadow: 'none'
      },

      JH3: {
        color: '#fff',
        textShadow: 'none'
      },

      JH4: {
        color: '#fff',
        textShadow: 'none'
      },

      JLinkButton: {
        color: '#fff',
        background: '#e330ef',
        borderRadius: '8px 55px',
        border: "none"
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
        borderRadius: '10px',
        boxShadow: 'none'
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
        backgroundColor: '#f1f4fb',
        backgroundImage: 'none',
        backgroundPositionX: 'none',
        backgroundSize: 'none'
      },

      JText: {
        color: '#555762',
        textShadow: 'none'
      },

      JH1: {
        color: '#555762',
        textShadow: 'none'
      },

      JH2: {
        color: '#555762',
        textShadow: 'none'
      },

      JH3: {
        color: '#555762',
        textShadow: 'none'
      },

      JH4: {
        color: '#555762',
        textShadow: 'none'
      },

      JLinkButton: {
        color: '#fff',
        background: '#6157ea',
        borderRadius: '500px',
        border: "none"
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
        borderRadius: '30px',
        boxShadow: 'none'
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
        backgroundColor: '#3f51b5',
        backgroundImage: 'none',
        backgroundPositionX: 'none',
        backgroundSize: 'none'
      },

      JText: {
        color: '#fff',
        textShadow: 'none'
      },

      JH1: {
        color: '#fff',
        textShadow: 'none'
      },

      JH2: {
        color: '#fff',
        textShadow: 'none'
      },

      JH3: {
        color: '#fff',
        textShadow: 'none'
      },

      JH4: {
        color: '#fff',
        textShadow: 'none'
      },

      JLinkButton: {
        color: '#fff',
        background: '#0c144c',
        borderRadius: '10px',
        border: "none"
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
        borderRadius: '10px',
        boxShadow: 'none'
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
        backgroundColor: '#fff',
        backgroundImage: 'none',
        backgroundPositionX: 'none',
        backgroundSize: 'none'
      },

      JText: {
        color: '#5a577b',
        textShadow: 'none'
      },

      JH1: {
        color: '#5a577b',
        textShadow: 'none'
      },

      JH2: {
        color: '#5a577b',
        textShadow: 'none'
      },

      JH3: {
        color: '#5a577b',
        textShadow: 'none'
      },

      JH4: {
        color: '#5a577b',
        textShadow: 'none'
      },

      JLinkButton: {
        color: '#fff',
        background: '#7c72ff',
        borderRadius: '10px',
        border: "none"
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
        borderRadius: '10px',
        boxShadow: 'none'
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
        backgroundColor: '#6856ff',
        backgroundImage: 'none',
        backgroundPositionX: 'none',
        backgroundSize: 'none'
      },

      JText: {
        color: '#fff',
        textShadow: 'none'
      },

      JH1: {
        color: '#fff',
        textShadow: 'none'
      },

      JH2: {
        color: '#fff',
        textShadow: 'none'
      },

      JH3: {
        color: '#fff',
        textShadow: 'none'
      },

      JH4: {
        color: '#fff',
        textShadow: 'none'
      },

      JLinkButton: {
        color: '#fff',
        background: '#e330ef',
        borderRadius: '100px',
        border: "none"
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
        borderRadius: '10px',
        boxShadow: 'none'
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
        backgroundColor: '#fff',
        backgroundImage: 'linear-gradient(90deg, rgba(180,58,96,1) 0%, rgba(253,29,29,1) 50%, rgba(254,201,127,1) 97%)',
        backgroundPositionX: 'none',
        backgroundSize: 'none'
      },

      JText: {
        color: '#fff',
        textShadow: 'none'
      },

      JH1: {
        color: '#fff',
        textShadow: 'none'
      },

      JH2: {
        color: '#fff',
        textShadow: 'none'
      },

      JH3: {
        color: '#fff',
        textShadow: 'none'
      },

      JH4: {
        color: '#fff',
        textShadow: 'none'
      },

      JLinkButton: {
        color: '#fff',
        background: '#a02a46',
        borderRadius: '10px',
        border: "none"
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
        borderRadius: '10px',
        boxShadow: 'none'
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
        backgroundColor: '#fff',
        backgroundImage: 'linear-gradient(45deg, #726193, #e37b7c 20%, #ffe4b4)',
        backgroundPositionX: 'none',
        backgroundSize: 'none'
      },

      JText: {
        color: '#fff',
        textShadow: 'none'
      },

      JH1: {
        color: '#fff',
        textShadow: 'none'
      },

      JH2: {
        color: '#fff',
        textShadow: 'none'
      },

      JH3: {
        color: '#fff',
        textShadow: 'none'
      },

      JH4: {
        color: '#fff',
        textShadow: 'none'
      },

      JLinkButton: {
        color: '#fff',
        background: '#740343',
        borderRadius: '100px',
        border: "none"
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
        boxShadow: '0px 2px 8px #c474848f',
        boxShadow: 'none'
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
        backgroundColor: '#e9dbff',
        backgroundImage: 'none',
        backgroundPositionX: 'none',
        backgroundSize: 'none'
      },

      JText: {
        color: '#732324',
        textShadow: 'none'
      },

      JH1: {
        color: '#732324',
        textShadow: 'none'
      },

      JH2: {
        color: '#732324',
        textShadow: 'none'
      },

      JH3: {
        color: '#732324',
        textShadow: 'none'
      },

      JH4: {
        color: '#732324',
        textShadow: 'none'
      },

      JLinkButton: {
        color: '#fff',
        background: '#af81ef',
        borderRadius: '10px',
        border: "none"
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
        borderRadius: '10px',
        boxShadow: 'none'
      }
    }    
  })


  const marble = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      
      colors: {
        link: '#004b9c',
      },

      body: {
        backgroundColor: '#fff',
        backgroundImage: 'url(https://wellb.app/images/v4/themes/marble.png)',
        backgroundPositionX: '0px',
        backgroundSize: '3800px'
      },

      JText: {
        color: '#555762',
        textShadow: 'none'
      },

      JH1: {
        color: '#555762',
        textShadow: 'none'
      },

      JH2: {
        color: '#555762',
        textShadow: 'none'
      },

      JH3: {
        color: '#555762',
        textShadow: 'none'
      },

      JH4: {
        color: '#555762',
        textShadow: 'none'
      },

      JLinkButton: {
        color: '#303030',
        background: 'transparent',
        borderRadius: '10px',
        border: "2px solid #303030"
      },
      
      JBadges: {
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        background: '#777777'
      },
      
      JSale: {
        borderRadius: '10px',
        footerBackground: 'transparent',
        buttonBackground: "#94f9f026",
        buttonColor: '#94f9f0',
        buttonBorderRadius: '10px'
      },

      JLocation: {
        color: '#555762',
        background: 'transparent',
        border: '1px solid #7f7c7c',
        borderRadius: '10px',
        boxShadow: 'none'
      }
    }    
  })


  const tropical = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      
      colors: {
        link: '#007bff',
      },

      body: {
        backgroundColor: '#fff',
        backgroundImage: 'url(https://wellb.app/images/v4/themes/tropical.jpeg)',
        backgroundPositionX: '201px',
        backgroundSize: '600px'
      },

      JText: {
        color: '#555762',
        textShadow: 'none'
      },

      JH1: {
        color: '#555762',
        textShadow: 'none'
      },

      JH2: {
        color: '#555762',
        textShadow: 'none'
      },

      JH3: {
        color: '#555762',
        textShadow: 'none'
      },

      JH4: {
        color: '#555762',
        textShadow: 'none'
      },

      JLinkButton: {
        color: '#fff',
        background: '#723b55',
        borderRadius: '10px',
        border: "none"
      },
      
      JBadges: {
        color: '#fff',
        border: 'none',
        borderRadius: '10px',
        background: '#777777'
      },
      
      JSale: {
        borderRadius: '14px',
        footerBackground: 'transparent',
        buttonBackground: "#94f9f026",
        buttonColor: '#94f9f0',
        buttonBorderRadius: '14px'
      },

      JLocation: {
        color: '#555762',
        background: 'transparent',
        border: '1px solid #7f7c7c',
        borderRadius: '14px',
        boxShadow: 'none'
      }
    }    
  })


  const zen = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      
      colors: {
        link: '#007bff',
      },

      body: {
        backgroundColor: '#fff',
        backgroundImage: 'url(https://wellb.app/images/v4/themes/fishes.png)',
        backgroundPositionX: '201px',
        backgroundSize: 'none'
      },

      JText: {
        color: '#c0392b',
        textShadow: '0px 0px 3px #97afd1'
      },

      JH1: {
        color: '#c0392b',
        textShadow: '0px 0px 3px #97afd1'
      },

      JH2: {
        color: '#c0392b',
        textShadow: '0px 0px 3px #97afd1'
      },

      JH3: {
        color: '#c0392b',
        textShadow: '0px 0px 3px #97afd1'
      },

      JH4: {
        color: '#c0392b',
        textShadow: '0px 0px 3px #97afd1'
      },

      JLinkButton: {
        color: '#fff',
        background: '#c0392b',
        borderRadius: '10px 35px',
        border: "3px solid #8a3424"
      },
      
      JBadges: {
        color: '#fff',
        border: 'none',
        borderRadius: '100px',
        background: '#7385a0'
      },
      
      JSale: {
        borderRadius: '30px',
        footerBackground: 'transparent',
        buttonBackground: "#94f9f026",
        buttonColor: '#94f9f0',
        buttonBorderRadius: '30px'
      },

      JLocation: {
        color: '#333',
        background: '#798cae',
        border: 'none',
        borderRadius: '30px',
        boxShadow: 'none'
      }
    }    
  })


  const cardboard = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      
      colors: {
        link: '#007bff',
      },

      body: {
        backgroundColor: '#fff',
        backgroundImage: 'url(https://wellb.app/images/v4/themes/cardboard.png)',
        backgroundPositionX: 'none',
        backgroundSize: '1000px'
      },

      JText: {
        color: '#333',
        textShadow: 'none'
      },

      JH1: {
        color: '#333',
        textShadow: 'none'
      },

      JH2: {
        color: '#333',
        textShadow: 'none'
      },

      JH3: {
        color: '#333',
        textShadow: 'none'
      },

      JH4: {
        color: '#333',
        textShadow: 'none'
      },

      JLinkButton: {
        color: '#fff',
        background: '#7679b3',
        borderRadius: '0px',
        border: "none"
      },
      
      JBadges: {
        color: '#494949',
        border: 'none',
        borderRadius: '4px',
        background: '#e69f9f'
      },
      
      JSale: {
        borderRadius: '0px',
        footerBackground: 'transparent',
        buttonBackground: "#94f9f026",
        buttonColor: '#94f9f0',
        buttonBorderRadius: '0px'
      },

      JLocation: {
        color: '#333',
        background: '#e0dada',
        border: 'none',
        borderRadius: '0px',
        boxShadow: 'none'
      }
    }    
  })


  const retroMonitor = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      
      colors: {
        link: '#92CD41',
      },

      body: {
        backgroundColor: '#2b1165',
        backgroundImage: 'linear-gradient(180deg, #2b1165 0%, #1a3a82 37%, #ab24b1 69%, #f54171 100%)',
        backgroundPositionX: 'none',
        backgroundSize: 'none',
        backgroundAttachment: 'fixed'
      },

      JText: {
        color: '#fff',
        textShadow: 'none'
      },

      JH1: {
        color: '#fff',
        textShadow: 'none'
      },

      JH2: {
        color: '#fff',
        textShadow: 'none'
      },

      JH3: {
        color: '#fff',
        textShadow: 'none'
      },

      JH4: {
        color: '#fff',
        textShadow: 'none'
      },

      JLinkButton: {
        color: '#fff',
        background: '#92CD41',
        borderRadius: '0px',
        border: "2px solid #111"
      },
      
      JBadges: {
        color: '#111',
        border: '2px solid #111',
        borderRadius: '0px',
        background: '#fff'
      },
      
      JSale: {
        borderRadius: '0px',
        footerBackground: 'transparent',
        buttonBackground: "#94f9f026",
        buttonColor: '#94f9f0',
        buttonBorderRadius: '0px'
      },

      JLocation: {
        color: '#fff',
        background: '#ffffff08',
        border: 'none',
        borderRadius: '0px',
        boxShadow: 'none',
        boxShadow: 'none'
      }
    }    
  })




  return (
    <>
      <NextUIProvider theme={eval(template)}>
        <RetroMonitor template={template}/>
        <Container
          css={{
            maxWidth:'none',
            overflow:'auto', 
            minHeight:'100vh',
            backgroundPositionX:'$body$backgroundPositionX',
            backgroundSize:'$body$backgroundSize',
            backgroundImage:'$body$backgroundImage',
            backgroundColor:"$body$backgroundColor",
            backgroundAttachment:'$body$backgroundAttachment'
          }}>
          {children}
        </Container>
      </NextUIProvider>
    </>
  )
}


