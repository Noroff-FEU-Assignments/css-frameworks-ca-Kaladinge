import React from 'react'
import CarouselPart from './CarouselPart'
import Container from 'react-bootstrap/Container'
import TextPart from './TextPart'
import TabAccordionPart from './TabAccordionPart'

function Home() {
    return (
        <>
            <CarouselPart/>
            <Container>
                <TextPart/>
            </Container>
            <Container>
                <TabAccordionPart/>
            </Container>
        </>
    )
}

export default Home
