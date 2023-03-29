'use client'

import { Badge, Row } from "@nextui-org/react"

export default function JBadges (props) {
    const data = props.data;

    return(
        <Row justify={data.aling} align="center" css={{marginTop:'15px',width:'100%'}}>
            {data.list.map((badge) => {
                return(
                    <Badge css={{
                        margin:'0 2px', 
                        color:'$JBadges$color', 
                        backgroundColor:"$JBadges$background", 
                        border:"$JBadges$border", 
                        borderRadius:'$JBadges$borderRadius',
                        }}>
                        {badge}
                    </Badge>
                )
            })}
        </Row>
    )
}