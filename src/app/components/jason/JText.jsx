'use client'
import { Text } from "@nextui-org/react"

export default function JTexts(props) {
    const data = props.data;

    return(
        <Text css={{textAlign: data.aling, color:'$headerColor'}}>
            {data.label}
        </Text>
    )
}