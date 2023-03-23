'use client'

import { Row, Grid } from "@nextui-org/react"
import { Prosto_One } from "next/font/google"

import JBadges from "./jason/JBadges"
import JGrid from "./jason/JGrid"
import JSale from "./jason/JSale"
import JLinkButton from "./jason/JLinkButton"
import JHeader from "./jason/JHeader"
import JLocation from "./jason/JLocation"
import JTitle from "./jason/JTitle"
import JMargin from "./jason/JMargin"
import JText from "./jason/JText"
import JList from "./jason/JList"

const components = {
  jbadges: JBadges,
  jgrid: JGrid,
  jsale: JSale,
  jlinkbutton: JLinkButton,
  jheader: JHeader,
  jlocation: JLocation,
  jtitle: JTitle,
  jmargin: JMargin,
  jtexts: JText,
  jlist: JList
}

export default function RenderPage (props) {
  
  const items = props.data.items;
  const template = props.data.template;

  return (
    <>
        <Grid>
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
