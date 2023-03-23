'use client'

import { Row, Grid } from "@nextui-org/react"
import { Prosto_One } from "next/font/google"

import Sale from "./jason/Sale"
import LinkButton from "./jason/LinkButton"
import Header from "./jason/Header"
import Location from "./jason/Location"
import Badges from "./jason/Badges"
import Title from "./jason/Title"
import Margin from "./jason/Margin"
import Texts from "./jason/Texts"
import GridColumns from "./jason/GridColumns"

const components = {
  sale: Sale,
  linkbutton: LinkButton,
  header: Header,
  location: Location,
  badges: Badges,
  title: Title,
  margin: Margin,
  texts: Texts,
  gridcolumns: GridColumns
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
