'use client'

import Link from "next/link";
import WindowsBar from "./templates/vibes90s/windowsBar"
import { Card, Row, Text } from '@nextui-org/react';


export default function JLocation(props) {
    const data = props.data;
    const template = props.template;

    return (
        <Card css={{marginTop:'15px',width:'100%',backgroundColor:"$JLocation$background", border:"$JLocation$border", borderRadius:'$JLocation$borderRadius', filter:"none", boxShadow:"$JLocation$boxShadow"}}>
            <WindowsBar template={template}/>
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