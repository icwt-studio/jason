'use client'
import Link from "next/link";
import { Card, Row, Text } from '@nextui-org/react';


export default function Location(props) {
    const data = props.data;

    return (
        <Card css={{marginTop:'15px',width:'100%', direction:'row', justifyContent:"center", alignItems:"center", padding:"15px 15px", backgroundColor:"$locationColor", border:"$locationBorder"}}>
            <Text css={{marginBottom: "3px", color:"$locationText"}} h4>{data.label}</Text>
            <Text>
                <Link target="_blank" href={data.link_map}>
                    {data.location}
                </Link>
            </Text>
            <Text css={{color:"$locationText"}}>{data.phone_number}</Text>
            <Text css={{color:"$locationText",textAlign:"center"}}>{data.description}</Text>
        </Card>
    );
}