import React from 'react'
import Container from 'react-bootstrap/Container';
import CardPart from './newsparts/CardPart';


function News() {
    return (
        <Container>
            <h1>News</h1>
            <CardPart/>
        </Container>
    )
}

export default News
