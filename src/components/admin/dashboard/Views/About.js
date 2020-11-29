import React, { Component } from 'react'
import { Button, Container, Table } from 'react-bootstrap'

import { Datagrid, DateField, EditButton, List, TextField } from 'react-admin'






export default class About extends Component {


    render() {
        return (

            <List {...this.props}>
                <Datagrid>
                    {/* <TextField source="_id" /> */}
                    <TextField source="fullname" />
                    <DateField source="DOB" />
                    <TextField source="address" />
                    <TextField source="email" />
                    <EditButton basePath='/about' />
                </Datagrid>
            </List>




        )
    }
}
