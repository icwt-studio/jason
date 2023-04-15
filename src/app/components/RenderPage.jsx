'use client'

import { Row, Grid } from "@nextui-org/react"


import { Press_Start_2P } from '@next/font/google'
const fontGoogle = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
})


import JBadges from "./jason/JBadges"
import JGrid from "./jason/JGrid"
import JSale from "./jason/JSale"
import JLinkButton from "./jason/JLinkButton"
import JLocation from "./jason/JLocation"
import JMargin from "./jason/JMargin"
import JText from "./jason/JText"
import JList from "./jason/JList"
import JH1 from "./jason/JH1"
import JH2 from "./jason/JH2"
import JH3 from "./jason/JH3"
import JH4 from "./jason/JH4"
import JAvatar from "./jason/JAvatar"
import JAutoText from "./jason/JAutoText"
import JImage from "./jason/JImage"
import JNavbar from "./jason/JNavbar"

const components = {
  jbadges: JBadges,
  jgrid: JGrid,
  jsale: JSale,
  jlinkbutton: JLinkButton,
  jlocation: JLocation,
  jmargin: JMargin,
  jtexts: JText,
  jlist: JList,
  jh1: JH1,
  jh2: JH2,
  jh3: JH3,
  jh4: JH4,
  javatar: JAvatar,
  jautotext: JAutoText,
  jimage: JImage,
  jnavbar: JNavbar
}

export default function RenderPage (props) {
  
  const items = props.data.items;
  const template = props.data.template;

  const font = () => {
    if (template === 'retroMonitor') {
      return fontGoogle.className
    }
  }

  return (
    <>
        <Grid className={font()}>
          {items.map(item => {
            const JasonComponent = components[item.component.toLowerCase()];
            
            if (components.hasOwnProperty(`${item.component.toLowerCase()}`)) {                           // Chequea que el componente del .json exista dentro de la lista
              return (
                <JasonComponent data={item.data} template={template}/>
              )
            }
          })}
        </Grid>
    </>
  )
}
