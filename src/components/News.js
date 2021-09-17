import React from 'react'
import Container from 'react-bootstrap/Container';
import PaginationBasic from './newsparts/PaginationPart';


import CardBasic from './newsparts/CardPart';


function News() {
    return (
        <Container>
            <h1>News</h1>
            {PaginationBasic}
                {CardBasic}
            {PaginationBasic}
        </Container>
    )
}

export default News
