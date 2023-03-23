'use client'

import { Badge, Row } from "@nextui-org/react"

export default function JBadges (props) {
    const data = props.data.list;

    return(
        <Row justify="center" align="center" css={{marginTop:'15px',width:'100%'}}>
            {data.map((badge) => {
                return(
                    <Badge css={{backgroundColor:"$badgesColor", border:"$badgesBorder", borderRadius:"5px", margin:'0 2px', color:'$badgesText', borderRadius:'$badgesBorderRadius'}}>{badge}</Badge>
                )
            })}
        </Row>
    )
}