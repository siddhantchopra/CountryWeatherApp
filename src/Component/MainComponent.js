import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Search from './searchComponent'
import Detail from './detailComponent'

const Main = ()=>{
    return(<div className="container">
        <Switch>
            <Route exact path="/" component={Search}/>
            <Route path="/country/:countryname" component={Detail} />
            <Redirect to="/"/>
        </Switch>
    </div>
    )

}

export default Main