'use client'
import { Text } from "@nextui-org/react";

export default function Texts (props) {
    const data = props.data

    return(
        <Text css={{textAlign:"center", color:'$headerColor'}}>
            {data.label}
        </Text>
    )
}