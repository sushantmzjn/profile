import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './About.css'

export default class About extends React.Component {
    render() {
        return (
            <Container fluid className="bimage">
                <Row><h1 style={{ background: "rgb(48, 51, 50)" }} className="p-2 w-100 m-0 text-center text-warning">About Me</h1></Row>

            </Container>
        )
    }
}