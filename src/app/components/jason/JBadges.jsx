'use client'

import { Badge, Row } from "@nextui-org/react"

export default function JBadges (props) {
    const data = props.data;

    return(
        <Row justify={data.aling} align="center" css={{marginTop:'15px',width:'100%'}}>
            {data.list.map((badge) => {
                return(
                    <Badge css={{backgroundColor:"$badgesColor", border:"$badgesBorder", borderRadius:"5px", margin:'0 2px', color:'$badgesText', borderRadius:'$badgesBorderRadius'}}>
                        {badge}
                    </Badge>
                )
            })}
        </Row>
    )
}