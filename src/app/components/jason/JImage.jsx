import { Image, Row } from "@nextui-org/react";

export default function JImage (props) {
    const data = props.data;

    return(
        <Row className="rowImage" justify={data.aling} align="center" css={{marginTop:'15px',width:'100%', '& > div': { margin: '0 !important' }}}>
            <Image
                width={data.width}
                height={data.height} 
                src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                alt="Default Image"
                objectFit="cover"
            />
        </Row>
    )
}