import React from 'react'
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import AppRoutes from './app-routes';

//import AppBar from 'material-ui/lib/app-bar';
//import LeftNav from 'material-ui/lib/left-nav';
//import MenuItem from 'material-ui/lib/menus/menu-item';

/*
class App extends React.Component {
    render () {
        return (
            <div>
                <AppBar
                    title='tv-s'
                    iconElementLeft={<div> </div>}
                />
                <LeftNav open={true}>
                  <MenuItem>Menu Item</MenuItem>
                  <MenuItem>Menu Item 2</MenuItem>
                </LeftNav>
            </div>
        )
    }
}
*/

ReactDOM.render(
    <Router>
        {AppRoutes}
    </Router>,
    document.getElementById('main')
)
