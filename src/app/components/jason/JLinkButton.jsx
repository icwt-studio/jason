'use client'

import React, { useState, useEffect } from 'react';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import CardboardEffect from "./templates/cardboard/CardboardEffect";

export default function JLinkButton(props) {
  const data = props.data;
  const template = props.template
  
  return (
    <Link href={data.link} target="_blank">
      <Button className={`${template}Class`} css={{
        position: 'relative',
        color:'$JLinkButton$color',
        marginTop:template === 'cardboard' ? '20px' : '15px',
        width: template === 'cardboard' ? 'calc(100% - 11px)' : '100%',
        backgroundColor:"$JLinkButton$background", 
        borderRadius:'$JLinkButton$borderRadius',
        border:'$JLinkButton$border',
        overflow:'visible'}}>
        {data.label}
        <CardboardEffect component='JLinkButton'/>
      </Button>
    </Link>
  )
}
