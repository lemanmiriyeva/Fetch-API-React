import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Blogs from '../Blogs/Blogs';
import Comments from '../Comments/Comments';
import Home from '../Home/Home';
import Images from '../Images/Images';
import Users from '../Users/Users';
const NavMenu = () => {
  return (
    <div>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>FETCH API</Navbar.Brand>
            <Nav className="justify-content-end">

              <Nav.Link as={Link} to="/" href="#home">Home</Nav.Link>
              <Nav.Link as={Link} to="/blogs" href="#features">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/users" href="#users">Users</Nav.Link>
              <Nav.Link as={Link} to="/images" href="#images">Images</Nav.Link>
              <Nav.Link as={Link} to="/comments" href="#comments">Comments</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={  <Home />}>
            
          </Route>
          <Route path="/users" element={  <Users />}>
            
          </Route>
          <Route path="images" element={  <Images />}>
            
          </Route>
          <Route path="comments" element={  <Comments />}>
            
          </Route>
          <Route path="blogs" element={  <Blogs />}>
          
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default NavMenu
