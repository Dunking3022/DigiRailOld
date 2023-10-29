import { Container, Button,  Stack, StackItem, Text, useDisclosure, VStack, HStack } from '@chakra-ui/react';

import React, { useState } from 'react';

function TrainCard({ trainName, arrivalTime, route, prices, handleClick }) {
    
    function handleClick(a,b){
        console.log("AWWOOGA"+a+b);
    }
  return (
    <Container fontFamily={'Space Grotesk'} shadow={'dark-lg'} rounded={'xl'} bgColor={'whiteAlpha.600'} margin={10} marginY={7} alignContent={'center'} justifyContent={'center'} width={['2xs','xs','sm','md','5xl']} flexDirection={'column'}>
      <Text fontSize={'2xl'} sx = {{'textShadow': ' 1px 5px 40px rgba(4, 0, 0, 0.75),-3px 10px 12px rgba(0, 0, 0, 0.75);'}} color={'black'} fontWeight={'semibold'} _hover={{color: 'white', transition: 'color 0.3s'}} marginBottom={3}>{trainName}</Text>
      <Text color={'gray.900'}>  {"⏰  " + arrivalTime}</Text>
      <Text>{route}</Text>
      <HStack>
        <Button width={40} marginX={[1,2,3]} marginY={2} bgColor={'paleturquoise'} color={'black'}><Stack spacing={'xs'}><StackItem>SL</StackItem>  <StackItem color={'grey'} fontSize={10}>{'₹'+prices[0]}</StackItem></Stack></Button>
        <Button width={40} marginX={[1,2,3]} marginY={2} bgColor={'orange'} color={'black'}><Stack spacing={'xs'}><StackItem>3AC</StackItem><StackItem color={'grey'} fontSize={10}>{ '₹'+ prices[1]}</StackItem></Stack></Button>
        <Button  width={40} marginX={[1,2,3]} marginY={2} bgColor={'lime'} color={'black'}><Stack spacing={'xs'}><StackItem>2AC</StackItem><StackItem color={'grey'} fontSize={10}>{'₹'+ prices[2]}</StackItem></Stack></Button>
        <Button  width={40} marginX={[1,2,3]} marginY={2} bgColor={'azure'} color={'black'}><Stack spacing={'xs'}><StackItem>1AC</StackItem><StackItem color={'grey'} fontSize={10}>{'₹'+ prices[3]}</StackItem></Stack></Button>
    </HStack>

    </Container>
  );
}

export default TrainCard;