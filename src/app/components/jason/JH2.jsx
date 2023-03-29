'use client'

import { Text, Row } from "@nextui-org/react"

export default function JH2 (props) {
    const data = props.data;

    return(
        <Row justify={data.align} align="center">
            <Text css={{marginBottom:'0px', marginTop:'0px', color:'$JH2$color'}} h2>{data.label}</Text>
        </Row>
    )
}