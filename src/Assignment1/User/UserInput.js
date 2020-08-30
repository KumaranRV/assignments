import React, {Component} from 'react'


class UserInput extends Component {
    render() {
        return(
            <div>
                <input type="text" onChange = {this.props.changes}/>
            </div>
        )
    }
 }

export default UserInput