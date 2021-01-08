import React, { Component } from 'react'
import { Datagrid, DeleteButton, EditButton, List, TextField } from 'react-admin';

export default class Resume extends Component {
    render() {
        const { props } = this;


        return <List {...props}>
            <Datagrid>
                <TextField source='date' />
                <TextField source='major' />
                <TextField source='university' />
                <TextField source='desc' />
                <DeleteButton basePath="/resume" />
                <EditButton basePath="/resume" />
            </Datagrid>

        </List>
    }
}
