import React from "react";
import ReactDOM from 'react-dom';
import Home from './components/Home.jsx'
import Todo from './components/Todo.jsx'
import Chat from './components/Chat.jsx'
import Nav from './components/Nav.jsx'

import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        <Router>
        <div>
            <Nav /> 
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/chat' component={Chat}/>
                <Route path='/todo' component={Todo}/>
            </Switch>
        </div>
    </Router>
        )
    }
}

ReactDOM.render(<App/> , document.getElementById('app'))
