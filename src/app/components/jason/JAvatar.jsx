import { Avatar, Row } from "@nextui-org/react"

export default function jAvatar (props) {
    const data = props.data;

    return(
        <Row justify={data.aling} align="center" css={{marginTop:'15px',width:'100%'}}>
            <Avatar src={data.link_img} css={{ size: "$20" }}/>
        </Row>
    )
}