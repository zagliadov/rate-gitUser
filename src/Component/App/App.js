import React, {Component} from 'react';
import GetUser from '../GetUser/GetUser';
import GetRate from '../GetRate/GetRate';

export default class App extends Component {

    state = {
        
    }

    getDate = (json) => {
       for (const key in json) {
           if (Object.hasOwnProperty.call(json, key)) {
               const element = json[key];
               this.setState({
                   [key]: [element],
               })
           }
       }
       console.log(this.state)
    };



    render() {

        return (
            <section>
                <h1>Hello</h1>
                <GetUser push={this.getDate} />
                <GetRate push={this.getDate}/>
            </section>

        )
    }
}