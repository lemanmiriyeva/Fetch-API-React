import React from 'react'
import Card from 'react-bootstrap/Card'

const Comment = ({comment}) => {
  return (
    <div>
      <Card>
      <Card.Body>
        <Card.Title>{comment.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{comment.email}</Card.Subtitle>
        <Card.Text>
          {comment.body}
        </Card.Text>
      
      </Card.Body>
    </Card>
    </div>
  )
}

export default Comment
