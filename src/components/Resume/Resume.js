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

]

var key = 0;
data.map((resm) => {
    myResume.push(
        // <Row className="text-light " style={{ background: "rgb(48, 10, 50)" }} key={key}>


        <div>
            <Card style={{ width: '18rem', color: "black" }}>
                <Card.Body>
                    <Card.Title>{resm.date}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"> {resm.major}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted"> {resm.uni}</Card.Subtitle>
                    <Card.Text>
                        {resm.des}
                    </Card.Text>
                </Card.Body>
            </Card>


        </div>

        // </Row>
    );
    key++;
})


export default class Resume extends React.Component {
    render() {
        return (
            <Container className="text-center w-100" style={{ background: "rgb(48, 51, 50)" }} fluid >
                <Row className=""><h1 style={{ background: "rgb(48, 51, 50)" }} className=" w-100 p-2 text-center text-warning">Resume</h1></Row>


                {myResume}

            </Container >
        )
    }
}