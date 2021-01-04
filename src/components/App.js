import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import './styles/main.css'

import Nav from './module/Nav'
import Home from './pages/Home'
import Models from './pages/Models'
import Catagories from './pages/Catagories'
import Support from './pages/Support'
import About from './pages/About'

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Nav/>
                <Route exact path="/" component={Home}/>
                <Route path="/models" component={Models}/>
                <Route path="/catagories" component={Catagories}/>
                <Route path="/support-me" component={Support}/>
                <Route path="/about" component={About}/>
            </div>
        </BrowserRouter>
    )
}

export default App;