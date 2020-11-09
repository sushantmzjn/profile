import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
export default class Resume extends React.Component {
    render() {
        return (
            <Container className="text-center" fluid >
                <Row className=""><h1 style={{ background: "rgb(48, 51, 50)" }} className=" w-100 p-2 text-center text-warning">Resume</h1></Row>

            </Container >
        )
    }
}