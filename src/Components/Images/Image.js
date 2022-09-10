import React from 'react'
import Card from 'react-bootstrap/Card'

const Image = ({image}) => {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image.url} />
                <Card.Body>
                    <Card.Title>{image.title}</Card.Title>
                   
                </Card.Body>
            </Card>
        </div>
    )
}

export default Image
