import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput';


class App extends Component {
    state = {
        username: 'Kumaran',
        userState: true
    }

    onChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    onClickHandler = ()=> {
        this.setState({
            userState:!this.state.userState
        })
    }

    render() {
        let userText = null
        if (this.state.userState) {
            userText =
                <div>
                    <UserOutput className="UserOutput" username={this.state.username} />
                    <UserOutput className='UserOutput' username={this.state.username} />
                    <UserOutput className='UserOutput' username={this.state.username} />
                </div>
        }

        return (
            <div>
                <UserInput changes={this.onChangeHandler} />
                <button onClick={this.onClickHandler}>Toggle</button>
                {userText}

            </div>
        );
    }
}

export default App;
