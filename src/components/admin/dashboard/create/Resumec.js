import React, { Component } from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin';

export default class Resumec extends Component {
    render() {
        const { props } = this;

        return <Create {...props}  >
            <SimpleForm>
                <TextInput source='date' />
                <TextInput source='major' />
                <TextInput source='university' />
                <TextInput source='desc' />

            </SimpleForm>
        </Create>
    }
}
