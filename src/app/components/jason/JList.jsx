'use client'

import { Row } from "@nextui-org/react";

export default function JList (props) {
    const data = props.data.list;

    return(
        <Row justify="center" align="center" css={{marginTop:'15px',width:'100%'}}>
            <ul>
                {data.map((item) => {
                    return(
                        <li>{item}</li>
                    )
                })}
            </ul>
        </Row>
    )
}