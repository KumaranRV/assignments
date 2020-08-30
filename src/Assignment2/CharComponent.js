import React, { Component } from 'react';
import '../App.css';

class CharComponent extends Component {
    render() {
        const styles = {
            display: 'inline-block',
            padding: '16px',
            textAlign: 'center',
            margin: '16px',
            border: '1px solid black'
        }
        return(
        <p onClick = {this.props.clicked} style = {styles}>{this.props.pText}</p>
        
        );
    }
}


export default CharComponent 