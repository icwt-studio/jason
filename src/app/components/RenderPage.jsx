'use client'

import { Row,Grid } from "@nextui-org/react"
//import all components from components/jason folder
import SimpleItem from "./jason/SimpleItem"
import LinkButton from "./jason/LinkButton"
import Header from "./jason/Header"
import Location from "./jason/Location"
import Badges from "./jason/Badges"
import Title from "./jason/Title"
import Margin from "./jason/Margin"
import Texts from "./jason/Texts"


export default function RenderPage (props) {
  
  const items = props.data.items;
  const cards = [];
  

  if(typeof(items) != 'undefined'){
    for (var i=0; i < items.length; i++) {
      switch(items[i].component){
        case 'SimpleItem':
          cards.push(<SimpleItem data={items[i].data}></SimpleItem>);
          break;

        case 'LinkButton':
          cards.push(<LinkButton data={items[i].data}></LinkButton>);
          break;

        case 'Header':
          cards.push(<Header data={items[i].data}></Header>);
          break;

        case 'Location':
          cards.push(<Location data={items[i].data}></Location>);
          break;

        case 'Badges':
          cards.push(<Badges data={items[i].data}></Badges>);
          break;
        
        case 'Title':
          cards.push(<Title data={items[i].data}></Title>);
          break;
        
        case 'Margin':
          cards.push(<Margin data={items[i].data}></Margin>);
          break;
        
        case 'Texts':
          cards.push(<Texts data={items[i].data}></Texts>);
          break;
        }
    }
  }
  
  return (
    <>
      <Row justify="center" align="center" css={{ background: '$bodyColor' }}>
        <Grid css={{marginBottom:'40px', maxWidth:'600px'}}>
          {cards}
        </Grid>
      </Row>
    </>
  )
}