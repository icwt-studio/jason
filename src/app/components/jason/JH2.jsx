'use client'

import { Text } from "@nextui-org/react";

export default function JH2(props) {
  const data = props.data;

  return (
      <Text css={{
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