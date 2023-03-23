'use client'
import Link from "next/link";
import { Card, Row, Text, Avatar } from '@nextui-org/react';

export default function Location(props) {
  const data = props.data;

  return (
    <Card css={{marginTop:'15px',width:'100%', direction:'row', justifyContent:"center", alignItems:"center", padding:"15px 15px"}}>
      <Row justify="center" align="center">
          <Avatar 
            src={data.link_img}
            css={{ size: "$20" }}
          />
      </Row>
      <Text css={{marginBottom: "3px"}} h4>{data.name}</Text>
      <Text>{data.specialty}</Text>

      <Link target="_blank" href={data.link_linkedin}>
          linkedin
      </Link>
      <Text css={{textAlign:"center"}}>{data.description}</Text>
  </Card>
  );
}