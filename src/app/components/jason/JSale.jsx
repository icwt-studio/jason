'use client'
import React, { useState, useEffect } from 'react';
import { Button, Card, Text, Row, Col } from '@nextui-org/react';
import Link from 'next/link';
import WindowsBar from "./templates/vibes90s/windowsBar"

export default function JSale(props) {
    const data = props.data;
    const template = props.template;
    
    return (
      <div style={{marginTop:"15px", border:template==="vibes90s" ? "1px solid #111" : "none"}}>
        <WindowsBar template={template}/>
        <Card css={{ w: "100%", h: "300px", borderRadius:'$JSale$borderRadius'}}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              
              <Text h3 color="white">
                {data.name}
              </Text>
              <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                {data.label}
              </Text>
              
              <Text color="white">
                {data.description?data.description:'Test test test'}
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={data.link_img}
              objectFit="cover"
              max-width="500px"
              width="100%"
              height="100%"
              alt="Relaxing app background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#0f111466",
              borderTop: "$borderWeights$light solid $gray800",
              bottom: 0,
              zIndex: 1,
              borderRadius:"0 0 $JSale$borderRadius $JSale$borderRadius",
              backgroundColor:"$JSale$footerBackground"
            }}
          >
            <Row>
              <Col>
                  <Text h3 color="white">
                      {data.currency} ${data.price}<small>00</small>
                    </Text>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Link href={data.link}>
                    <Button
                      flat
                      auto
                      rounded
                      css={{ color: "$JSale$buttonColor", backgroundColor:'$JSale$buttonBackground', borderRadius:'$JSale$buttonBorderRadius'}}
                    >
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        Pedir ya!
                      </Text>
                    </Button>
                  </Link>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </div>
    )
  }

  