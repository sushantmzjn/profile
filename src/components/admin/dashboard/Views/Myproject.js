import React, { Component } from 'react'
import { Datagrid, DeleteButton, EditButton, List, TextField } from 'react-admin'

export default class Myproject extends Component {
    render() {
        const { props } = this;
        return <List {...props}>
            <Datagrid>
                <TextField source='projectType' />
                <TextField source='projectName' />
                {/* <DeleteButton basePath="/resume" />
                <EditButton basePath="/resume" /> */}
            </Datagrid>

        </List>

    }
}
