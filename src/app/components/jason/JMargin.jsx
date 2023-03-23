'use client'

import { Spacer } from "@nextui-org/react"

export default function JMargin (props) {
    const data = props.data;

    return(
        <Spacer  y={data.y}/>
    )
}