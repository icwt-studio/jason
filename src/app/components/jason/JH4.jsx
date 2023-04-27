'use client'

import { Text } from "@nextui-org/react";

export default function JH4 (props) {
    const data = props.data;
    const jsonindex = props.jsonindex;

    return(
        <Text data-key="label" data-jsonindex={jsonindex} data-component="JH4" className="jeditable" css={{
            marginTop:'8px', 
            marginBottom:'0px', 
            color:'$JH4$color', 
            textAlign: data.aling,
            textShadow:'$JH4$textShadow',
            }} h4>
            {data.label}
        </Text>
    )
}