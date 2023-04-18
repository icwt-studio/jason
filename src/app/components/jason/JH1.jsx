'use client'

import { Text } from "@nextui-org/react";
import { editComponent } from '../../hooks/editComponent';
import { useRef } from 'react';

export default function JH1 (props) {
    const data = props.data;

    const editableRef = useRef(null);
    const handleEditClick = () => {
      editComponent(editableRef);
    }

    return(
        <Text ref={editableRef} onClick={handleEditClick} css={{
            marginTop:'0px', 
            marginBottom:'0px', 
            color:'$JH4$color', 
            textAlign: data.aling,
            textShadow:'$JH1$textShadow',
            }} h1>
            {data.label}
        </Text>
    )
}