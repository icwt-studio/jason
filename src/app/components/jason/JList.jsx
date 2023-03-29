'use client'

import { Row, Text } from "@nextui-org/react";

export default function JList (props) {
    const data = props.data;

    return(
        <Row justify={data.aling} align="center" css={{marginTop:'0px',width:'100%'}}>
            <ul style={{listStyle: data.style, marginTop:"0", marginBottom:"0"}}>
                {data.list.map((item) => {
                    return(
                        <li key={item} style={{marginBottom:"0"}}>
                            <Text css={{color:'$JText$color'}}>
                                {item}
                            </Text>
                        </li>
                    )
                })}
            </ul>
        </Row>
    )
}
