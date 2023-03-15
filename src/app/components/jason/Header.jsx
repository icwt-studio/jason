'use client'
import React, { useState, useEffect } from 'react';
import { Avatar,Grid,Image, Card,Text, Row, Col } from '@nextui-org/react';
export default function Header(props) {
    const data = props.data;

  return (
    <Row justify="center" align="center" css={{marginTop:'20px'}}>
      <Grid
        justify="center"
        alignItems="center"
      >
        <Row justify="center" align="center">
          <Avatar 
            src={data.link_img}
            css={{ size: "$20" }}
          />
        </Row>
        <Row justify="center" align="center">
          <Text css={{marginBottom: "0px", color:'$headerColor'}} h3>{data.name}</Text>
        </Row>
        <Row justify="center" align="center">
            <Text css={{textAlign:"center", lineHeight: "21px", color:'$headerColor'}}>
              {data.description}
            </Text>
        </Row>
      </Grid>
    </Row>
  );
  }

  