'use client'

import React, { useState, useEffect } from 'react';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function JLinkButton(props) {
  const data = props.data;

  return (
    <Link href={data.link} target="_blank">
      <Button css={{
        color:'$JLinkButton$color',
        marginTop:'15px',
        width:'100%', 
        backgroundColor:"$JLinkButton$background", 
        borderRadius:'$JLinkButton$borderRadius',
        border:'$JLinkButton$border'}}>
        {data.label}
      </Button>
    </Link>
  )
}
