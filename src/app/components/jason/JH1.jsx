'use client'

import { Text, Row } from "@nextui-org/react"

export default function JH1 (props) {
    const data = props.data;

    return(
        <Text css={{
            marginTop:'0px', 
            marginBottom:'0px', 
            color:'$JH4$color', 
            textAlign: data.aling,
            textShadow:'$JH1$textShadow',
            }} h1>
            {data.label}
        </Text>
    )
}