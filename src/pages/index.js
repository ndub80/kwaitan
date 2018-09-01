import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col } from 'reactstrap'
import Card from '../components/blocks/card'
import Button from '../components/blocks/button'

const IndexPage = () => (
  <Container>
    <Row>
      <Col className="text-center" md={6}>
        <Card>
          <Card.Image src="https://images.pexels.com/photos/1110656/pexels-photo-1110656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <Card.Header>This is the First Header</Card.Header>
          <Card.Title>This is the title</Card.Title>
          <Card.Text>This is the text</Card.Text>
        </Card>
      </Col>
      <Col className="text-center" md={6}>
        <Card>
          <Card.Image src="https://images.pexels.com/photos/1110656/pexels-photo-1110656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <Card.Header>This is the Header</Card.Header>
          <Card.Title>This is the title</Card.Title>
          <Card.Text>This is the text</Card.Text>
        </Card>
      </Col>
      <Link to="/page-2/" style={{ textDecoration: 'none' }}>
        <Button>
          <Button.Text>Push this button</Button.Text>
        </Button>
      </Link>
    </Row>
  </Container>
)

export default IndexPage
