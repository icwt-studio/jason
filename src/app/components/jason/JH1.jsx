'use client'

import { Text, Row } from "@nextui-org/react"

export default function JH1 (props) {
    const data = props.data;

    return(
        <Row justify={data.align} align="center">
            <Text css={{marginBottom:'0px', marginTop:'0px', color:'$JH1$color'}} h1>{data.label}</Text>
        </Row>
    )
}