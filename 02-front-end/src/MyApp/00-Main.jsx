import React from 'react'
import { ApolloProvider } from "react-apollo"
import { HashRouter, Route, Link } from 'react-router-dom'
import './Style/style.css'
import { client } from './PrismaEndPoint/EndPoint'

import ReadAll from './01-ReadAll'
import Apartments from './02-AddApartments'
import Update1 from './03-UpdateSinger'
import Delete1 from './04-DeleteSinger'


export default class extends React.Component{
    render(){

        return(
            <ApolloProvider client={client}>
                <HashRouter>
                    <div className="MainContainer">
                
                        <div className="menu1">
                            <Link className="menuButton" to="/">All Apartments</Link>
                            <Link className="menuButton" to="/2">Add Apartment(Add-Singer)</Link>
                            <Link className="menuButton" to="/2">Add Floor Plan(Add-Singer)</Link>
                            <Link className="menuButton" to="/3">Update Apartment(Update-Singer)</Link>
                            <Link className="menuButton" to="/3">Update Floor Plan(Update-Singer)</Link>
                            <Link className="menuButton" to="/4">Delete Apartment(Delete-Singer)</Link>
                        </div>
                
                        <hr/>
                
                        <Route exact path="/" component={ReadAll}/>
                        <Route path="/2" component={Apartments}/>
                        <Route path="/3" component={Update1}/>
                        <Route path="/4" component={Delete1}/>

                        <br/>
                        <hr/>
                        <div>By: Edmundo Edited by: Dianne Hodnett</div>
                
                    </div>
                </HashRouter>
            </ApolloProvider>
        )
    }
}
