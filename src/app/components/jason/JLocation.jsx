'use client'

import Link from "next/link";
import WindowsBar from "./templates/vibes90s/windowsBar"
import { Card, Row, Text } from '@nextui-org/react';
import CardboardEffect from "./templates/cardboard/CardboardEffect";

export default function JLocation(props) {
    const data = props.data;
    const template = props.template;

    return (
        <Card css={{
            marginTop:'15px',
            marginTop:template === 'cardboard' ? '20px' : '15px',
            width: template === 'cardboard' ? 'calc(100% - 11px)' : '100%',
            backgroundColor:"$JLocation$background",
            border:"$JLocation$border",
            borderRadius:'$JLocation$borderRadius',
            filter:"none", 
            boxShadow:"$JLocation$boxShadow", 
            overflow:'visible'
            }}>
            <WindowsBar template={template}/>
            <CardboardEffect template={template} component='JLocation'/>
            <div style={{padding:"15px 15px", display:"flex", flexDirection:'column', textAlign:'center'}}>
                <Text css={{marginBottom: "3px", color:"$JLocation$color"}} h4>{data.label}</Text>
                <Text>
                    <Link target="_blank" href={data.link_map}>
                        {data.location}
                    </Link>
                </Text>
                <Text css={{color:"$JLocation$color"}}>{data.phone_number}</Text>
                <Text css={{color:"$JLocation$color",textAlign:"center"}}>{data.description}</Text>
            </div>
        </Card>
    );
}