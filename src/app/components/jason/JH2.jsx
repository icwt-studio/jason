'use client'

import { Text } from "@nextui-org/react";
import { editComponent } from '../../hooks/editComponent';
import { useRef } from 'react';

export default function JH2(props) {
  const data = props.data;

  const editableRef = useRef(null);
  const handleEditClick = () => {
    editComponent(editableRef);
  }

  return (
      <Text ref={editableRef} onClick={handleEditClick} css={{
          marginTop:'0px', 
          marginBottom:'0px', 
          color:'$JH2$color', 
          textAlign: data.aling,
          textShadow:'$JH2$textShadow',
          }} h2>
          {data.label}
      </Text>
  );
}