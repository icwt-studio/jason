'use client'

import { Text } from "@nextui-org/react";

export default function JH1 (props) {
    const data = props.data;
    const jsonindex = props.jsonindex;

    return(
        <Text data-key="label" data-jsonindex={jsonindex} data-component="JH1" className="jeditable" css={{
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