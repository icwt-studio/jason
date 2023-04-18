'use client'

import { Text } from "@nextui-org/react";
import { editComponent } from '../../hooks/editComponent';
import { useRef } from 'react';

export default function JH3 (props) {
    const data = props.data;

    const editableRef = useRef(null);
    const handleEditClick = () => {
      editComponent(editableRef);
    }

    return(
        <Text ref={editableRef} onClick={handleEditClick} css={{
            marginTop:'8px', 
            marginBottom:'0px', 
            color:'$JH3$color', 
            textAlign: data.aling,
            textShadow:'$JH3$textShadow',
            }} h3>
            {data.label}
        </Text>
    )
}