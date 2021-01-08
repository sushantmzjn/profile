import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Admin_SideNab from './components/admin/admindash/adminSideNav/Navbar';

export default function admin() {
    return (

        <div className='w-100'>
            <Admin_SideNab />
        </div>
    )
}
