import React, { Component } from 'react'
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server'

import About from '../dashboard/Views/About'
import Aboutc from './create/Aboutc'
import AboutEdit from './create/Aboute'

import Contact from '../dashboard/Views/Contact'
import Myproject from '../dashboard/Views/Myproject'

import Resume from '../dashboard/Views/Resume'
import Resumec from './create/Resumec'
import ResumeEdit from './create/Resumee'

import Service from '../dashboard/Views/Service'
import NoteIcon from '@material-ui/icons/Note';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';


const dataProvider = jsonServerProvider('http://localhost:8080')

class Sidenavbar extends Component {
    render() {
        return (
            <Admin dataProvider={dataProvider}>
                <Resource name="myproject" list={Myproject} />
                <Resource name="resume" list={Resume} icon={NoteIcon} create={Resumec} edit={ResumeEdit} />
                <Resource name="Service" list={Service} />
                <Resource name="contact" list={Contact} icon={ContactPhoneIcon} />
                <Resource name="about" list={About} create={Aboutc} edit={AboutEdit} />
            </Admin>
        )
    }
}
export default Sidenavbar;