'use client'

import { Text } from "@nextui-org/react";

export default function JH2(props) {
  const data = props.data;
  const jsonindex = props.jsonindex;

  return (
      <Text data-key="label" data-jsonindex={jsonindex} data-component="JH2" className="jeditable" css={{
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