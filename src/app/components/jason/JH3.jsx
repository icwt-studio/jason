'use client'

import { Text } from "@nextui-org/react";

export default function JH3 (props) {
    const data = props.data;

    return(
        <Text css={{
            marginTop:'8px', 
            marginBottom:'0px', 
            color:'$JH3$color', 
            textAlign: data.aling,
            textShadow:'$JH3$textShadow',
            }} h3>
            {data.label}
        </Text>
    )
}