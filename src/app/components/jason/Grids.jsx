'use client'

import { Grid } from "@nextui-org/react"

import RenderPage from "../RenderPage";


export default function Grids (props) {

    const data = props.data;

    return (
        <Grid.Container gap={1} justify="center">
            {data.columns.map(column => {
                return(
                    <Grid direction="column" xs={6}>
                        <RenderPage data={column} />
                    </Grid>
                )
            })}
        </Grid.Container>
    );

}