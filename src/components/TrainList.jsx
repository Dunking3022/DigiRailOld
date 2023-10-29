import React from 'react';
import TrainCard from './TrainCard';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, StackItem, Text, useDisclosure } from '@chakra-ui/react';



const trainData = [
  {
    trainName: 'KRNTK SHRI KRANTI',
    arrivalTime: '09:00 AM',
    route: 'NDLS - UMB',
    prices : [120, 229, 325, 601]
  },
  {
    trainName: 'KATHGODAM KRANTI EXPR',
    arrivalTime: '10:30 AM',
    route: 'NDLS - GZBD',
    prices : [179, 320, 555, 819]
  },
  {
    trainName: 'JAN SHATABDI EXPR',
    arrivalTime: '01:15 PM',
    route: 'SML - NDLS',
    prices : [201, 532, 729, 1023]
  },
];

function TrainList() {
    
  return (
    <div>
        
        <Stack bgColor={'blackAlpha.700'} width={'100vw'} height={'100vh'} justifyContent={'center'} alignItems={'center'}>
            
      {trainData.map((train, index) => (
        <StackItem key={index}>
        <TrainCard
          
          trainName=  {'🚅  > '+train.trainName}
          arrivalTime={train.arrivalTime}
          route={train.route}
          prices = {train.prices}
        />
        </StackItem>
      ))}
      
    </Stack>
   
    </div>
  );
}

export default TrainList;