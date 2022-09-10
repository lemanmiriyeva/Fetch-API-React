import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={'6'}><Link to="/blogs">
            <div className="gridItem item1">
              <h1>Blogs</h1>
            </div>
            </Link></Col>
            <Col md={'6'}><Link to="/comments">
            <div className="gridItem item2">
              <h1>Comments</h1>
            </div>
            </Link></Col>
            <Col md={'6'}><Link to="/images">
            <div className="gridItem item3">
              <h1>Images</h1>
            </div>
            </Link></Col>
            <Col md={'6'}><Link to="/users">
            <div className="gridItem item4">
              <h1>Users</h1>
            </div>
            </Link></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
