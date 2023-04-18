'use client'

import { Text } from "@nextui-org/react";
import { editComponent } from '../../hooks/editComponent';
import { useRef } from 'react';

export default function JText(props) {
    const data = props.data;
    const template = props.template

    const font = () => {
        if (template === 'retroMonitor') {
          return "'__Press_Start_2P_e81491', '__Press_Start_2P_Fallback_e81491'"
        }
    }

    const editableRef = useRef(null);
    const handleEditClick = () => {
      editComponent(editableRef);
    }

    return(
        <Text ref={editableRef} onClick={handleEditClick} css={{textAlign:data.aling, color:'$JText$color', textShadow:'$JText$textShadow', fontFamily:font()}}>
            {data.label}
        </Text>
        
    )
}