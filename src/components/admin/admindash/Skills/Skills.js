import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import Admin_Nav from '../adminSideNav/Navbar'
import { Container } from '@material-ui/core'
import { Table, Button, Modal, Form } from 'react-bootstrap'




export default function Skills() {

    const [show, setShow] = useState(false);

    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)


    const [skillsdata, setSkillsdata] = useState([])

    const [skilltype, setSkillType] = useState([])
    const [percentages, setPercentage] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:8080/skills')
            .then(res => {
                // console.log(res);
                setSkillsdata(res.data)
            }).catch(err => { console.log(err); })
    }, [])

    function skilltypeHandler(e) {
        setSkillType(e.target.value)
    }
    function percentageHandler(e) {
        setPercentage(e.target.value)
    }

    function postHandler(e) {
        e.preventDefault();
        var data = {
            type: skilltype,
            percentage: percentages
        }

        Axios.post('http://localhost:8080/skills', data)
            .then(res => {
                console.log(res);

            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            <Admin_Nav />
            <Container fluid style={{ marginLeft: '25%' }}>
                <div>
                    <h1 className="text-warning">My Skills
                    <Button onClick={handleOpen} style={{ float: '' }} >Add</Button></h1>

                </div>
                <Table className=''>
                    <thead>
                        <tr>
                            <th>Skills</th>
                            <th>Percentage</th>
                            <th>Action</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            skillsdata.map(skill =>
                                <tr key={skill.id}>
                                    <td>{skill.type}</td>
                                    <td>{skill.percentage}</td>
                                    <td><Button >Edit</Button></td>

                                </tr>
                            )
                        }

                    </tbody>
                </Table>



                <Modal size='sm' show={show} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title className='text-warning' >Add your skills</Modal.Title>
                    </Modal.Header>
                    <Form className='w-100 px-3'>
                        <Form.Label>Skills</Form.Label>
                        <Form.Control type="text" onChange={skilltypeHandler} required />
                        <Form.Label>In Percentage</Form.Label>
                        <Form.Control type="text" onChange={percentageHandler} required />
                    </Form>
                    <Modal.Footer className='mt-2'>
                        <Button variant="secondary" onClick={handleClose}>
                            Close</Button>
                        <Button variant="primary" onClick={postHandler} >
                            Save Changes</Button>
                    </Modal.Footer>
                </Modal>




            </Container>
        </>
    )
}
