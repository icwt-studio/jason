'use client'
import { Text } from "@nextui-org/react"

export default function JTexts(props) {
    const data = props.data;

    return(
        <Text css={{textAlign:"center", color:'$headerColor'}}>
            {data.label}
        </Text>
    )
}