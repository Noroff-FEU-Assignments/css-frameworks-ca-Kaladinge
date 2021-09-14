import React from 'react'
import CarouselPart from './homeparts/CarouselPart'
import Container from 'react-bootstrap/Container'
import TextPart from './homeparts/TextPart'
import TabAccordionPart from './homeparts/TabAccordionPart'

function Home() {
    return (
        <>
            <CarouselPart/>
            <Container>
                <TextPart/>
                <TabAccordionPart/>
            </Container>
        </>
    )
}

export default Home
