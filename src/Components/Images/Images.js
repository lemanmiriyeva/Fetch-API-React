
import Image from './Image'
import { React, useEffect, useState } from 'react'
import { Container, Row,Col } from 'react-bootstrap'

const Images = () => {
    const [images, setImages] = useState([])

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setImages(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])
  return (
    <div>
      <Container>
        <Row>
            <h1>Images</h1>
            <hr/>
            {images.length>0  && (
                images.map(image=>(
                    <Col md={'4'}><Image image={image}/></Col>
                ))
               
            )}
        </Row>
      </Container>
    </div>
  )
}

export default Images
