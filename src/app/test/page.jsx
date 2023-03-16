'use client'

import { Grid, Card, Text } from "@nextui-org/react";
export default function Test() {



  const pets = ['cat', 'dog', 'bat'];

  console.log(pets.includes('cat'));


  
  const MockItem = ({ text }) => {
    return (
      <Card css={{ h: "$24", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };
  return (
    <Grid.Container gap={1} justify="center">
      <Grid xs={3}>
        <MockItem text="1 of 3" />
      </Grid>
      <Grid xs={3}>
        <MockItem text="2 of 3" />
      </Grid>
      <Grid xs={3}>
        <MockItem text="3 of 3" />
      </Grid>
      <Grid xs={3}>
        <MockItem text="3 of 3" />
      </Grid>
    </Grid.Container>
  );
}
