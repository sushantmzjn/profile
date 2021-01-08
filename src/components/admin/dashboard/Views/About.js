import React from 'react'
import { Datagrid, DateField, DeleteButton, EditButton, List, TextField } from 'react-admin'



class About extends React.Component {

    render() {
        const {
            props,
        } = this;

        return <List {...props}>
            <Datagrid>
                <TextField source='fullname' />
                <DateField source='DOB' />
                <TextField source='address' />
                <TextField source='email' />
                <TextField source='contact' />
                <DeleteButton basePath="/about" />
                <EditButton basePath="/about" />
            </Datagrid>

        </List>
    }
}

export default About
