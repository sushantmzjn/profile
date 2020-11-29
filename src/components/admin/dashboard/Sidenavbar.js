import React, { Component } from 'react'
import { Admin, Resource } from 'react-admin';
import About from '../dashboard/Views/About'
import Contact from '../dashboard/Views/Contact'
import Myproject from '../dashboard/Views/Myproject'
import Resume from '../dashboard/Views/Resume'
import Service from '../dashboard/Views/Service'
import NoteIcon from '@material-ui/icons/Note';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Axios from 'axios';

class Sidenavbar extends Component {
    render() {
        return (
            <Admin dataProvider={Axios('http://localhost:8080')}>
                <Resource name="My Project" list={Myproject} />
                <Resource name="Resume" list={Resume} icon={NoteIcon} />
                <Resource name="Service" list={Service} />
                <Resource name="Contact" list={Contact} icon={ContactPhoneIcon}/>
                <Resource name="About" list={About} />
            </Admin>
        )
    }
}
export default Sidenavbar;