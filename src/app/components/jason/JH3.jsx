'use client'

import { Text, Row } from "@nextui-org/react"

export default function JH3 (props) {
    const data = props.data;

    return(
        <Row justify={data.align} align="center">
            <Text css={{marginBottom:'0px', marginTop:'8px', color:'$text'}} h3>{data.label}</Text>
        </Row>
    )
}