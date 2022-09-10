import React from 'react'
import Card from 'react-bootstrap/Card'

import './Blogs.css'
const Blog = ({blog}) => {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>
                       {blog.body}
                    </Card.Text>
                </Card.Body>
            </Card>
            
        </div>
    )
}

export default Blog
