import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'

var myResume = [];

var data = [
    {
        date: "2014-2015", major: "Master Degree of Design", uni: "CAMBRIDGE UNIVERSITY", des: " small river named Duden flows by their place and supplies it with the necessary regelialia"
    },
    {
        date: "2015-2018", major: "Master Degree of Design", uni: "CAMBRIDGE UNIVERSITY", des: " small river named Duden flows by their place and supplies it with the necessary regelialia"
    },
    {
        date: "2015-2018", major: "Master Degree of Design", uni: "CAMBRIDGE UNIVERSITY", des: " small river named Duden flows by their place and supplies it with the necessary regelialia"
    },
    {
        date: "2015-2018", major: "Master Degree of Design", uni: "CAMBRIDGE UNIVERSITY", des: " small river named Duden flows by their place and supplies it with the necessary regelialia"
    },
    {
        date: "2015-2018", major: "Master Degree of Design", uni: "CAMBRIDGE UNIVERSITY", des: " small river named Duden flows by their place and supplies it with the necessary regelialia"
    },

]

var key = 0;
data.map((resm) => {
    myResume.push(
        // <Row className="text-light " style={{ background: "rgb(48, 10, 50)" }} key={key}>
        <Col lg={4} key={key} className="mb-4">
            <Card className="w-100 py-4 text-light" style={{ background: "black" }}>
                <Card.Body>
                    <Card.Title>{resm.date}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"> {resm.major}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted"> {resm.uni}</Card.Subtitle>
                    <Card.Text>
                        {resm.des}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        // </Row>
    );
    key++;
})


export default class Resume extends React.Component {
    render() {
        return (
            <Container className="text-center p-0" style={{ background: "rgb(48, 51, 50)" }} fluid id="resume">
                <h1 style={{ background: "rgb(48, 51, 50)" }} className=" w-100 p-2 text-center text-warning">Resume</h1>

                <Row className="px-5">
                    {myResume}
                </Row>
            </Container >
        )
    }
}