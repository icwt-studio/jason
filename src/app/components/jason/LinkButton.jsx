'use client'
import React, { useState, useEffect } from 'react';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function LinkButton(props) {
  const data = props.data;

  return (
    <Link href={data.link} target="_blank">
      <Button css={{marginTop:'15px',width:'100%', backgroundColor:"$linkButtonColor"}}>
         {data.label}
      </Button>
    </Link>
  )
}
  