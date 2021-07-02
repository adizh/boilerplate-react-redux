    import React from 'react';
    import {Switch,Route,BrowserRouter} from 'react-router-dom'
    import Home from './Home'
    import 'bootstrap/dist/css/bootstrap.min.css';
    const Root = () => {
        return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={()=><Home/>}/>

           
            </Switch>
        </BrowserRouter>
        );
    };

    export default Root;