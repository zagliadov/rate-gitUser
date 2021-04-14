import React, {Component} from 'react';
import Input from './GetUserComponent/Input/Input';
import Submit from './GetUserComponent/Submit/Submit';

export default class GetUser extends Component {

    state = {
        login: "",
    }
    login = (e) => {
        this.setState({
            login: e.target.value,
        });
       
    }

    getUser = (e) => {
        e.preventDefault();
        
        fetch(`https://api.github.com/users/${this.state.login}`)
            .then(res => res.json())
            .then(json => {
                this.props.push(json);
            });
    };

    render() {

        return (
            <form onSubmit={this.getUser}>
                <label>Github user: </label>
                <Input login={this.login} />
                <Submit />
            </form>
        )
    }
}