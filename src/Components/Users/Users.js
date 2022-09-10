import { React, useEffect, useState } from 'react'
import { Container,Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'

const Users = () => {
    const [users, setUsers] = useState([])

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        
        <Container>
            <Row>
<h1>Users</h1>
<hr/>
            <Table striped align='center'>
                <thead>
                    <tr align='center'>
                        <th>№</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 && (
                        users.map(user => (
                            <tr key={user.id} align="center">
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                            </tr>
                        ))

                    )}
                </tbody>
            </Table></Row>
        </Container>
    )
}

export default Users
