import React from 'react';
import { Dropdown } from 'react-bootstrap';

export default class Dashboard extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-dark">
                <span className="navbar-brand mb-0 h1 text-light">Dashboard</span>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                     </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </nav>

        )
    }
}