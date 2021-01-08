import React, { Component } from 'react'
import { Create, DateInput, SimpleForm, TextInput } from 'react-admin';

export default class Aboutc extends Component {

    render() {
        const {
            props
        } = this;

        return <Create {...props}  >
            <SimpleForm>
                <TextInput source='fullname' />
                <DateInput source='DOB' />
                <TextInput source='address' />
                <TextInput source='email' />
                <TextInput source='contact' />
            </SimpleForm>
        </Create>
    }
}
