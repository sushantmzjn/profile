import React, { Component } from 'react'
import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

export default class Aboute extends Component {
    render() {
        const {
            props
        } = this;

        return <Edit undoable={false} {...props} >
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='fullname' />
                <DateInput source='DOB' />
                <TextInput source='address' />
                <TextInput source='email' />
                <TextInput source='contact' />
            </SimpleForm>
        </Edit>
    }
}
