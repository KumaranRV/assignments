import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Assignment2/ValidationComponent'
import CharComponent from './Assignment2/CharComponent';


class App extends Component {
    state = {
        text: ""
    }
    onChangeHandler = (event) => {
        let tempText = event.target.value
        this.setState({
            text: tempText
        })
    }

    onClickRemoveBlockHandler(index){
        let tempText = this.state.text.split('');
        tempText.splice(index,1);
        this.setState({
            text: tempText.join('')
        })

    }

    render() {
        let inputText = this.state.text.split('').map((ch, index) => {
            return <CharComponent clicked={()=>this.onClickRemoveBlockHandler(index)} pText = {ch} key= {index}/>
        })
        console.log(inputText)
        return (
            <div className="App">
                <p>Type something below</p>
                <input type="text" onChange={this.onChangeHandler}/>
                <p>{this.state.text}</p>
                <ValidationComponent length={this.state.text.length}/>
                {inputText}
                
            </div>
        );
    }
}

export default App;
