'use client'

import { Text, Row } from "@nextui-org/react"

export default function JH4 (props) {
    const data = props.data;

    return(
        <Row justify={data.align} align="center">
            <Text css={{marginBottom:'0px', marginTop:'8px', color:'$text'}} h4>{data.label}</Text>
        </Row>
    )
}