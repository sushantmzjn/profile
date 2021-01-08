import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import Admin_Nav from '../adminSideNav/Navbar'
import { Container } from '@material-ui/core'
import { Table, Button } from 'react-bootstrap'




export default function Skills() {
    const [skillsdata, setSkillsdata] = useState('')

    var myskillsData = [];
    useEffect(() => {
        Axios.get('http://localhost:8080/skills')
            .then(res => {
                var data = res.data;
                data.map((item, index) => {
                    myskillsData.push(
                        <tr key={index}>
                            <td>{item.type}</td>
                            <td>{item.percentage}</td>
                            <td><Button>Edit</Button>
                                <Button>Add</Button></td>
                        </tr>
                    )
                });
                if (!skillsdata) setSkillsdata(myskillsData)

            }).catch(err => {
                console.log(err);
            })
    })


    return (
        <>
            <Admin_Nav />
            <Container fluid style={{ marginLeft: '25%' }}>
                <div>
                    <h1 className="text-warning">My Skills</h1>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>Skills</th>
                            <th>Percentage</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {skillsdata}

                    </tbody>

                </Table>




            </Container>



        </>
    )
}
