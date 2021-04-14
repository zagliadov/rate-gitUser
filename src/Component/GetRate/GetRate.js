import React, {Component} from 'react';
import Input from './GetRateComponent/Input/Input';
import Submit from '../GetUser/GetUserComponent/Submit/Submit'


export default class GetRate extends Component {

    state = {
        currency: '',
    }

    getCurrency = (e) => {
        this.setState({
            currency: e.target.value,
        });
        
    };
    getRate = (e) => {
        e.preventDefault();
        fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20200302&json`)
            .then(res => res.json())
            .then(json => {
                for (const iterator of json) {
                    let {cc} = iterator;
                    if((this.state.currency).toUpperCase() === cc) {
                        //console.log(iterator)
                        this.props.push(iterator)
                    }
                }
            })
    }

    render() {

        return (
            <form onSubmit={this.getRate}>
               <label>Rate:</label>
                <Input currency={this.getCurrency}/>
                <Submit />
            </form>
        )
    }
}