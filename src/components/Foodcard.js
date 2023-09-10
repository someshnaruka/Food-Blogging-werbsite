import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
function foodCard(props) {
  return (
   <section>
   <Card className='lg:w-96 w-full p-8  border-[1px] border-[#373737] lg:border-border rounded-2xl'>
  <CardBody>
    <Image      src={props.img}
      alt='Menu-item-img'
      borderRadius='lg'
      className='w-full mx-auto'
    />
    <Stack mt='20' spacing='12' className='flex flex-col items-center lg:items-start'>
      <Heading className='font-poppins font-bold  text-base lg:text-xl text-[#0E2368] '>{props.title}</Heading>
      <Text className='lg:text-left text-center text-[#444957] text-xs lg:text-base font-open font-normal'>
        {props.desc}
      </Text>
    </Stack>
  </CardBody>
  <CardFooter mt='20' className='flex flex-col items-center lg:items-start'>
      <Button  variant='solid' colorScheme='blue' className='w-1/2 lg:w-1/3 border-[1.5px] border-[#424961] px-3 py-1 rounded-3xl text-[#424961] font-semibold text-base font-source'>
        Read More
      </Button>
   

  </CardFooter>
</Card>
   </section>
  )
}

export default foodCard