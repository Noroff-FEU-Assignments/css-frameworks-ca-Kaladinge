import React from 'react'
import Container from 'react-bootstrap/Container';
import CardPart from './newsparts/CardPart';
import PaginationBasic from './newsparts/PaginationPart';


function News() {
    return (
        <Container>
            <h1>News</h1>
            {PaginationBasic}
            <CardPart/>
            {PaginationBasic}
        </Container>
    )
}

export default News
