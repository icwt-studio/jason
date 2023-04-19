'use client'

import { Text } from "@nextui-org/react";
import { editComponent } from '../../hooks/editComponent';
import { useRef } from 'react';

export default function JH4 (props) {
    const data = props.data;

    const editableRef = useRef(null);
    const handleEditClick = () => {
      editComponent(editableRef);
    }

    return(
        <Text ref={editableRef} onClick={handleEditClick}  css={{
            marginTop:'8px', 
            marginBottom:'0px', 
            color:'$JH4$color', 
            textAlign: data.aling,
            textShadow:'$JH4$textShadow',
            }} h4>
            {data.label}
        </Text>
    )
}