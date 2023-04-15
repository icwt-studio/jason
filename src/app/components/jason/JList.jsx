'use client'

import { Row, Text } from "@nextui-org/react";

export default function JList (props) {
    const data = props.data;
    const template = props.template

    const font = () => {
        if (template === 'retroMonitor') {
          return "'__Press_Start_2P_e81491', '__Press_Start_2P_Fallback_e81491'"
        }
    }

    return(
        <Row justify={data.aling} align="center" css={{marginTop:'0px',width:'100%'}}>
            <ul style={{listStyle: data.style, marginTop:"0", marginBottom:"0"}}>
                {data.list.map((item) => {
                    return(
                        <li key={item} style={{marginBottom:"0"}}>
                            <Text css={{color:'$JText$color', fontFamily:font()}}>
                                {item}
                            </Text>
                        </li>
                    )
                })}
            </ul>
        </Row>
    )
}
