import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export default class Contact extends Component {
    render() {
        return (

            <Form>
                <input type="text" placeholder="address" />
                <input type="text" placeholder="Contact no." />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Sites" />
                <Button className="btn-warning">Save</Button>
            </Form>
        )
    }
}
