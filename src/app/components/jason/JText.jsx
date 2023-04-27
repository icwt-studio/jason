'use client'

import { Text } from "@nextui-org/react";

export default function JText(props) {
    const data = props.data;
    const template = props.template

    const font = () => {
        if (template === 'retroMonitor') {
          return "'__Press_Start_2P_e81491', '__Press_Start_2P_Fallback_e81491'"
        }
    }

    return(
        <Text css={{textAlign:data.aling, color:'$JText$color', textShadow:'$JText$textShadow', fontFamily:font()}}>
            {data.label}
        </Text>
        
    )
}