
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidevar from './Sidenavbar'
import About from './Views/About'


export default class Dashboard extends React.Component {
    render() {
        return (
            <div>

                <BrowserRouter>
                    <Sidevar />
                    <Switch>
                        <Route path='/aabout' exact component={About} />

                    </Switch>

                </BrowserRouter>

            </div>

        )
    }
}