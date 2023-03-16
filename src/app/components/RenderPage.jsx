'use client'

import { Row,Grid } from "@nextui-org/react"
import SimpleItem from "./jason/SimpleItem"
import LinkButton from "./jason/LinkButton"
import Header from "./jason/Header"
import Location from "./jason/Location"
import Badges from "./jason/Badges"
import Title from "./jason/Title"
import Margin from "./jason/Margin"
import Texts from "./jason/Texts"




const components = {
  simpleitem: SimpleItem,
  linkbutton: LinkButton,
  header: Header,
  location: Location,
  badges: Badges,
  title: Title,
  margin: Margin,
  texts: Texts
}

export default function RenderPage (props) {
  
  const items = props.data.items;
    
  return (
    <>
      <Row justify="center" align="center" css={{ background: '$bodyColor' }}>
        <Grid css={{marginBottom:'40px', maxWidth:'600px'}}>
          {items.map(item => {
            const JasonComponent = components[item.component.toLowerCase()];
            return (
              <JasonComponent data={item.data}/>
            );
          })}
        </Grid>
      </Row>
    </>
  )
}






//   return (
//     <>
//       <Row justify="center" align="center" css={{ background: '$bodyColor' }}>
//         <Grid css={{marginBottom:'40px', maxWidth:'600px'}}>
//           {/* {cards} */}
//           {items.map(item => {
//             const customTag = components.simpleitem;
//             console.log(customTag);
//             // return <customTag>{item.data.label}</customTag>
            
//             // return <customTag data={item.component}/>
//           })}
//         </Grid>
//       </Row>
//     </>
//   )
// }