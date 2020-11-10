import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import img1 from "../../images/home.jpg"
import img2 from "../../images/night.jpg"


var myProject = [];
var key = 0;
for (let index = 0; index < 3; index++) {
    for (let y = 0; y < 2; y++) {
        var Fp, Sp;
        if (index === 0 ? true : false) {
            Fp = 4;
            Sp = 8;
        } else {
            Sp = 4;
            Fp = 8;
        }

        var actualWidth = y === 0 ? Fp : Sp;

        myProject.push(
            <Col lg={actualWidth} style={{ height: "250px" }} className="mb-4 img-col" key={key++}>
                <div className="w-100 h-100 overflow-hidden">
                    <Image src={actualWidth === 4 ? img1 : img2} fluid></Image>
                </div>
                <div className="image-centered-text text-light h-100" style={{ width: actualWidth === 4 ? "92.5%" : "96.5%" }}>
                    <p style={{ marginTop: actualWidth === 4 ? "28%" : "14%" }}
                        className="p-0 mb-0 default-xs-font">
                        web development
                    </p>
                    <p className="m-0 p-0 text-uppercase ">
                        Project Name
                        </p>
                </div>


            </Col >
        )
    }

}


export default class Project extends React.Component {
    render() {
        return (
            <Container className="text-center p-0" style={{ background: "rgb(48, 51, 50)" }} fluid >
                <h1 style={{ background: "rgb(48, 51, 50)" }} className=" w-100 p-1 text-center text-warning">My Project</h1>

                <Row className="mb-0 px-5">{myProject}</Row>
            </Container >
        )
    }
}