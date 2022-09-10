import { React, useEffect, useState } from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Blog from './Blog'
import './Blogs.css'
const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setBlogs(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])
  return (
    <div>
      <Container>
        <Row>
            <h1>Blogs</h1>
            <hr/>
        {blogs.length > 0 && (
            blogs.map(blog=>(
                <Col md={'4'}><Blog className="cards" blog={blog}/></Col>
            ))
            
        )}
        </Row>
        
      </Container>
    </div>
  )
}

export default Blogs
