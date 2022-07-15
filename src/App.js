import React from "react"
import axios from 'axios'

import './App.css';

class App extends React.Component{
    state = {
         advice: ''
    };

    componentDidMount(){
        // console.log('component did mount');
        this.fetchAdvice();
       
    }

    fetchAdvice = () =>{
        const url = 'https://api.adviceslip.com/advice';
        axios.get(url)
        .then((res)=>{
            const  advice  = res.data.slip.advice;
             
            // console.log(advice);
            this.setState( {advice} );
        })  
        .catch((error)=>{
            console.log(error);
        });
    }
    render(){
        const {advice} = this.state; 
        return (
            <div className="app">
                <div className="card">
                        <h1 className="heading"> { advice } </h1>
                        <button className="button" onClick={this.fetchAdvice}>
                            <span>GIVE ME ADIVICE! 😇</span>
                        </button>
                </div>
                
            </div>
        )
    }
}
export default App 