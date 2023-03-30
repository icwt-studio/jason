'use client'
import { Text } from "@nextui-org/react"

export default function JTexts(props) {
    const data = props.data;

    return(
        <Text css={{textAlign: data.aling, color:'$JText$color', textShadow:'$JText$textShadow'}}>
            {data.label}
        </Text>
    )
}