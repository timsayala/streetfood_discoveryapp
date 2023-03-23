import React from 'react';
import './Home.css';
import cardData from '../cardData.json';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../Card';
import Navbar from '../Navbar';
import Banner from '../Banner';
import Search from '../Search';
import Footer from '../Footer';

function Home() {
  const cardRows = [];

  for (let i = 0; i < cardData.length; i += 3) {
    const row = (
      <Row key={i}>
        {cardData.slice(i, i + 3).map((card) => (
          <Col key={card.id}>
            <Card
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              description={card.description}
            />
          </Col>
        ))}
      </Row>
    );
    cardRows.push(row);
  }

  return (
    <div>
      <Navbar />
      <Banner />
      <Search />
      <Container>
        {cardRows}
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default Home;
