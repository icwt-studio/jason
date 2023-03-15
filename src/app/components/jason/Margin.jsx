'use client'
import { Spacer } from "@nextui-org/react"

export default function Margin (props) {
    const data = props.data;

    return(
        <Spacer  y={data.y}/>
    )
}