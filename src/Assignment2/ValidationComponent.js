import React, {Component} from 'react'
import '../App.css'

class ValidationComponent extends Component {
    render() {        
        let displayOutput = null
        if(this.props.length!==0)
            displayOutput = <output>{this.props.length<5?"Text too short":"Text long enough"}</output>

        return(
            <div className="ValidationComponent">
                {displayOutput}
            </div>
        );
    }
}

export default ValidationComponent