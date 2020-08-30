import React, {Component} from 'react'
import '../App.css'


class UserOutput extends Component {
    render() {
        return(
            <div className="UserOutput">
                <p>{this.props.username} is man of 22 ages old</p>
            </div>
        )
    }
 }

export default UserOutput