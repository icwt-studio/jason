'use client'
import Link from "next/link";
import WindowsBar from "./templates/vibes90s/windowsBar"
import { Card, Row, Text } from '@nextui-org/react';


export default function Location(props) {
    const data = props.data;
    const template = props.template;

    return (
        <Card css={{marginTop:'15px',width:'100%',backgroundColor:"$locationColor", border:"$locationBorder", borderRadius:'$locationBorderRadius'}}>
            <WindowsBar template={template}/>
            <div style={{padding:"15px 15px", display:"flex", flexDirection:'column', textAlign:'center'}}>
                <Text css={{marginBottom: "3px", color:"$locationText"}} h4>{data.label}</Text>
                <Text>
                    <Link target="_blank" href={data.link_map}>
                        {data.location}
                    </Link>
                </Text>
                <Text css={{color:"$locationText"}}>{data.phone_number}</Text>
                <Text css={{color:"$locationText",textAlign:"center"}}>{data.description}</Text>
            </div>
        </Card>
    );
}