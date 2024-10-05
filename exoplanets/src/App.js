import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox"
import { exoplanets } from './exoplanets';
import "./index.css";

class App extends Component {
    constructor(){
        super()
        this.state={
            exoplanets: exoplanets,
            searchfield:''
        
        }
    }
    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value});
        
    }
    render(){
        const filteredexoplanets = this.state.exoplanets.filter(exoplanets =>{
            return exoplanets.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
        <div className="tc">
            <h1>Explore Exoplanets...</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList exoplanets={filteredexoplanets} />
        </div>
       
        );
    }
}


export default App;