'use client'
import { Text, Row } from "@nextui-org/react"

export default function Title (props) {
    const data = props.data;

    return(
        <Row justify="center" align="center">
            <Text css={{marginBottom:'0px', marginTop:'8px', color:'$headerColor'}} h3>{data.label}</Text>
        </Row>
    )
}