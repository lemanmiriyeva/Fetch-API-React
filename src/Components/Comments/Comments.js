import {React,useEffect,useState} from 'react'
import { Row,Container,Col } from 'react-bootstrap'
import Comment from './Comment'

const Comments = () => {
    const [comments, setComments] = useState([])

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setComments(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])
  return (
    <div>
      <Container>
        <Row>
          <h1>Comments</h1>
          <hr/>
            {comments.length>0 &&(
                comments.map(comment=>(
                    <Col md={'4'}><Comment comment={comment}/></Col>
                ))
                
            )}
        </Row>
      </Container>
    </div>
  )
}

export default Comments
