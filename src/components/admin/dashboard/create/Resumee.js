import React, { Component } from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin';

export default class Resumec extends Component {
    render() {
        const { props } = this;

        return <Edit {...props} undoable={false} >
            <SimpleForm>
                <TextInput source='date' />
                <TextInput source='major' />
                <TextInput source='university' />
                <TextInput source='desc' />

            </SimpleForm>
        </Edit>
    }
}
