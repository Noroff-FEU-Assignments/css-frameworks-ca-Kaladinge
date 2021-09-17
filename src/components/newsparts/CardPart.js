import Card from 'react-bootstrap/Card'

import firstPicture from '../../News images/news-1.jpg';
import secondPicture from '../../News images/news-2.jpg';
import thirdPicture from '../../News images/news-3.jpg';
import fourthPicture from '../../News images/news-4.jpg';
import fifthPicture from '../../News images/news-5.jpg';
import sixthPicture from '../../News images/news-6.jpg';
import seventhPicture from '../../News images/news-7.jpg';
import eightPicture from '../../News images/news-8.jpg';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


let items = [];
for (let number = 1; number <= 8; number++) {

    let pictures = [firstPicture,secondPicture,thirdPicture,fourthPicture,fifthPicture,sixthPicture,seventhPicture,eightPicture];

    let cardClass = ""
    if(number >= 5) {
        cardClass += "card2";
    }

  items.push(
    <Col xs={12} sm={6} lg={3} key={number}>
        <Card className={cardClass}>
                    <Card.Img variant="top" src= {pictures[number-1]} className="card__image" alt="newspicture"/>
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                        <Button variant="primary" className="card__button">More</Button>
                    </Card.Body>
        </Card>
    </Col>

    
  );
}

const CardBasic = (

    <Row >{items}</Row>
);

export default CardBasic;

